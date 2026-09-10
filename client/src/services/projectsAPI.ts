const API_URL = "http://192.168.1.154:3000/api/projects";

export interface Project {
  projId: number;
  type: "CS" | "UIUX";
  name: string;
  year: number;
  description: string;
}

export async function getCSProjects(): Promise<Project[]> {
  const res = await fetch(`${API_URL}/CS`);

  if (!res.ok) {
    throw new Error("Failed to fetch CS projects");
  }

  return res.json();
}

export async function getUIUXProjects(): Promise<Project[]> {
  const res = await fetch(`${API_URL}/UIUX`);

  if (!res.ok) {
    throw new Error("Failed to fetch UIUX projects");
  }

  return res.json();
}