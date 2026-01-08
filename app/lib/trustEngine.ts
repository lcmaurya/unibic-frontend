export type TrustInputs = {
  deals: number;
  skills: number;
  community: number;
};

export function calculateTrustScore(input: TrustInputs): number {
  const dealsPoints = input.deals * 100;
  const skillsPoints = input.skills * 50;
  const communityPoints = input.community * 30;

  return dealsPoints + skillsPoints + communityPoints;
}
