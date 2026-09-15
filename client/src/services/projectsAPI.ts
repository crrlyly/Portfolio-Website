const API_URL = import.meta.env.VITE_API_URL;

// const stagingURL = "http://localhost:3000";

export interface Project {
  projId: number;
  type: "CS" | "UIUX";
  name: string;
  year: number;
  description: string;
}

export async function getCSProjects(): Promise<Project[]> {
  const res = await fetch(`${API_URL}/api/projects/CS`);

  if (!res.ok) {
    throw new Error("Failed to fetch CS projects");
  }

  return res.json();
}

export async function getUIUXProjects(): Promise<Project[]> {
  const res = await fetch(`${API_URL}/api/projects/UIUX`);

  if (!res.ok) {
    throw new Error("Failed to fetch UIUX projects");
  }

  return res.json();
}
