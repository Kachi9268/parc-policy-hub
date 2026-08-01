import { seo } from "./seo";
import { homepageSettings } from "./homepageSettings";
import { post } from "./post";
import { category } from "./category";
import { author } from "./author";
import { galleryImage } from "./galleryImage";
import { leader } from "./leader";
import { achievement } from "./achievement";
import { activity } from "./activity";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [
  // objects
  seo,
  // documents
  homepageSettings,
  post,
  category,
  author,
  galleryImage,
  leader,
  achievement,
  activity,
  siteSettings,
];
