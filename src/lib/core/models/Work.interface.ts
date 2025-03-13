import type { StatusWork } from "../types/StatusWork.type";
import type { OriginRepo } from "../types/OriginRepo.type";

export interface Work {
    id: string;
    title: string;
    url: string;
    repoUrl: string;
    originRepo: OriginRepo | undefined;
    publicRepo: boolean;
    image: string;
    order: number;
    status: StatusWork | undefined;
    technologies: string[];
}