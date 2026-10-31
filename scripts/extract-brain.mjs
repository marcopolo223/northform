import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const modelsDir = path.resolve("public/models");
const source = fs.readFileSync(path.join(modelsDir, "head.obj"), "utf8");
const lines = source.split(/\r?\n/);

const verts = [];
const faces = [];
let inBrain = false;

for (const line of lines) {
  if (line.startsWith("v ")) verts.push(line);
  if (line.startsWith("o ")) inBrain = line.trim() === "o brain";
  if (inBrain && line.startsWith("f ")) faces.push(line);
}

function faceIndices(line) {
  return line
    .trim()
    .slice(2)
    .split(/\s+/)
    .map((part) => Number.parseInt(part.split("/")[0], 10));
}

const used = new Set();
for (const face of faces) {
  for (const index of faceIndices(face)) used.add(index);
}

const sorted = [...used].sort((a, b) => a - b);
const remap = new Map(sorted.map((old, i) => [old, i + 1]));

const out = ["# brain mesh by drummyfish, CC0 1.0", "o brain"];
for (const old of sorted) {
  out.push(verts[old - 1]);
}
for (const face of faces) {
  out.push(`f ${faceIndices(face).map((index) => remap.get(index)).join(" ")}`);
}

const objPath = path.join(modelsDir, "brain.obj");
fs.writeFileSync(objPath, `${out.join("\n")}\n`);

execFileSync(
  "npx",
  ["--yes", "obj2gltf", "-i", objPath, "-o", path.join(modelsDir, "brain.glb")],
  { stdio: "inherit", shell: true },
);

fs.unlinkSync(objPath);
fs.unlinkSync(path.join(modelsDir, "head.obj"));
console.log("wrote public/models/brain.glb");
