

import RankedSVG from "../assets/ranked.svg";
import DuelSVG from "../assets/duel.svg";
import FunSVG from "../assets/fun.svg";
import TrainingSVG from "../assets/training.svg";
import { Categories } from "../models/categories.model";

export const categories:Categories[] = [
  { id: "1", title: "Ranqueada", icon: RankedSVG },
  { id: "2", title: "Duelo 1x1", icon: DuelSVG },
  { id: "3", title: "Diversão", icon: FunSVG },
  { id: "4", title: "Treino", icon: TrainingSVG },
]