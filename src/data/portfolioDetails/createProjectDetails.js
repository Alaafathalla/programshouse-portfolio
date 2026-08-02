import {
  defaultGoalsImageStyles,
  defaultHeroImageStyles,
  defaultSolutionImageStyles,
} from "./shared.js";

export function createProjectDetails({
  slug,
  shortTitle,
  categoryLabel,
  description,
  services = "Website Development, UI/UX Design",
  team = "5 specialists",
  about,
  goals,
  solution,
  imageFolder = slug,
  heroImageStyles = defaultHeroImageStyles,
  aboutImageStyles,
  goalsImageStyles = defaultGoalsImageStyles,
  solutionImageStyles = defaultSolutionImageStyles,
  review,
}) {
  return {
    shortTitle,
    categoryLabel,
    description,
    services,
    team,
    heroImage: `/images/portfolio/${imageFolder}/hero.png`,
    heroImageStyles,
    aboutImages: {
      first: `/images/portfolio/${imageFolder}/about-1.png`,
      second: `/images/portfolio/${imageFolder}/about-2.png`,
    },
    ...(aboutImageStyles ? { aboutImageStyles } : {}),
    about,
    goals,
    goalsImage: `/images/portfolio/${imageFolder}/goals.png`,
    goalsImageStyles,
    solution,
    solutionImage: `/images/portfolio/${imageFolder}/solution.png`,
    solutionImageStyles,
    ...(review ? { review } : {}),
  };
}
