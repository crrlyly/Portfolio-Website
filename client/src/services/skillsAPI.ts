const API_URL = "http://192.168.1.154:3000/api/skills";

export interface Skill {
  skillsId: number;
  name: string;
  skillType: string;
}

export async function getLanguages(): Promise<Skill[]> {
  const res = await fetch(`${API_URL}/languages`);
  if (!res.ok) {
    throw new Error("Failed to fetch language skills");
  }
  return res.json();
}
export async function getFrameworks(): Promise<Skill[]> {
  const res = await fetch(`${API_URL}/frameworks`);
  if (!res.ok) {
    throw new Error("Failed to fetch framework skills");
  }
  return res.json();
}
export async function getDesigns(): Promise<Skill[]> {
  const res = await fetch(`${API_URL}/designs`);
  if (!res.ok) {
    throw new Error("Failed to fetch design skills");
  }
  return res.json();
}
export async function getTools(): Promise<Skill[]> {
  const res = await fetch(`${API_URL}/tools`);
  if (!res.ok) {
    throw new Error("Failed to fetch tools");
  }
  return res.json();
}
