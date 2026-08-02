import { projects } from "./portfolioData.js";
import { portfolioDetailsOverrides } from "./portfolioDetails/index.js";
import { defaultAboutImageStyles, sharedDetails } from "./portfolioDetails/shared.js";

export const portfolioDetails = projects.reduce((result, project) => {
  const custom = portfolioDetailsOverrides[project.slug] || {};

  result[project.slug] = {
    ...sharedDetails,
    ...project,
    ...custom,
    shortTitle: custom.shortTitle || project.title,
    categoryLabel: custom.categoryLabel || project.type,
    heroImage: custom.heroImage || project.image,
    heroImageStyles: custom.heroImageStyles || null,
    aboutImages: custom.aboutImages || {
      first: project.image,
      second: project.image,
    },
    aboutImageStyles: custom.aboutImageStyles
      ? {
          first: {
            ...defaultAboutImageStyles.first,
            ...(custom.aboutImageStyles.first || {}),
          },
          second: {
            ...defaultAboutImageStyles.second,
            ...(custom.aboutImageStyles.second || {}),
          },
        }
      : null,
    goalsImage: custom.goalsImage || project.image,
    goalsLabel:
      custom.goalsLabel ||
      `${custom.shortTitle || project.title} project experience`,
    goalsImageStyles: custom.goalsImageStyles || null,
    solutionImage: custom.solutionImage || project.image,
    solutionImageStyles: custom.solutionImageStyles || null,
    about: {
      ...sharedDetails.about,
      ...(custom.about || {}),
    },
    goals: custom.goals || sharedDetails.goals,
    solution: custom.solution || sharedDetails.solution,
    review: {
      ...sharedDetails.review,
      ...(custom.review || {}),
    },
  };

  return result;
}, {});

export const getPortfolioDetailsBySlug = (slug) => portfolioDetails[slug];
