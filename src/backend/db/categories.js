import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "romance",
    description:"Romantic novels includes only the focus on a developing romantic relationship and an optimistic ending."
  },
  {
    _id: uuid(),
    categoryName: "classics",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "biographies",
    description: "A biography is simply the story of a real person's life. It could be about a person who is still alive, someone who lived centuries ago, someone who is globally famous, an unsung hero forgotten by history, or even a unique group of people."
  },
  {
    _id: uuid(),
    categoryName: "adventure",
    description: "The adventure genre consists of books where the protagonist goes on an epic journey, either personally or geographically. Often the protagonist has a mission and faces many obstacles in his way."
  },
  {
    _id: uuid(),
    categoryName: "self-help",
    description: "Self help and Growth-oriented books focus on broader, more holistic topics like finding happiness, discovering your purpose, setting goals, developing your career, and improving relationships."
  },
  {
    _id: uuid(),
    categoryName: "sports",
    description:
    "stories where a sport has an impact on the plot or main character."
  },

];
