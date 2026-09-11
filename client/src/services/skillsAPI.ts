const API_URL = import.meta.env.API_URL;

export interface Skill {
  skillsId: number;
  name: string;
  skillType: string;
}

export async function getLanguages(): Promise<Skill[]> {
  const res = await fetch(`${API_URL}/skills/languages`);
  if (!res.ok) {
    throw new Error("Failed to fetch language skills");
  }
  return res.json();
}
export async function getFrameworks(): Promise<Skill[]> {
  const res = await fetch(`${API_URL}/skills/frameworks`);
  if (!res.ok) {
    throw new Error("Failed to fetch framework skills");
  }
  return res.json();
}
export async function getDesigns(): Promise<Skill[]> {
  const res = await fetch(`${API_URL}/skills/designs`);
  if (!res.ok) {
    throw new Error("Failed to fetch design skills");
  }
  return res.json();
}
export async function getTools(): Promise<Skill[]> {
  const res = await fetch(`${API_URL}/skills/tools`);
  if (!res.ok) {
    throw new Error("Failed to fetch tools");
  }
  return res.json();
}
