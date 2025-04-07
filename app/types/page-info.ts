import { RichTextContent } from "@graphcms/rich-text-types";
import { KnownTech, Project } from "./project";
import { WorkExperiense } from "./work-experience";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knownTechs: KnownTech[];
  highlightProjects: Project[];
};

export type ProjectPageData = {
  project: Project;
}

export type ProjectsPageData = {
  projects: Project[];
}

export type HomePageData = {
  page: HomePageInfo;
  workExperiences: WorkExperiense[];
};
