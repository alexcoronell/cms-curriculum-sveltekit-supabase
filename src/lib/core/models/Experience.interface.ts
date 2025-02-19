interface ExperienceFunctions {
  id: string;
  experienceId: Experience['id'];
  functionDetail: string;
}

export interface Experience {
    id: string;
    nameBusiness: string;
    position: string;
    place: string;
    since: string;
    until: string;
    current: boolean;
    functions?: ExperienceFunctions[];
  }
  