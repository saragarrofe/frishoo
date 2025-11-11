export type Trip = {
  id: number;
  title: string;
  location: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  imageUrl: string;
};
