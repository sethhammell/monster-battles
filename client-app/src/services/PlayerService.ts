import axios, { AxiosResponse } from "axios";
import { ObjectId } from "mongodb";

const url: string = "api/players/";

class PlayerService {
  static getPlayers(): Promise<unknown> {
    return new Promise((resolve, reject) => {
      try {
        axios.get(url).then((res) => {
          const data = res.data;
          resolve(
            data.map((player: Player) => ({
              ...player,
              createdAt: new Date(player.createdAt),
              updatedAt: new Date(player.updatedAt),
            }))
          );
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static getPlayer(name: string): Promise<unknown> {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}${name}`).then((res) => {
          const playerData =
            Array.isArray(res.data) && res.data.length ? res.data[0] : res.data;
          const player = playerData
            ? {
                ...playerData,
                createdAt: new Date(playerData.createdAt),
                updatedAt: new Date(playerData.updatedAt),
              }
            : null;
          resolve(player);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static updatePlayer(name: string, exp: number, currentMonsterIndex: number): Promise<AxiosResponse<any, any>> {
    return axios.put(`${url}${name}`, {
      exp,
      currentMonsterIndex
    });
  }

  static insertPlayer(name: string): Promise<AxiosResponse<any, any>> {
    return axios.post(url, {
      name,
    });
  }

  static deletePlayer(id: ObjectId): Promise<AxiosResponse<any, any>> {
    return axios.delete(`${url}${id}`);
  }
}

interface Player {
  _id: ObjectId;
  name: string;
  exp: number;
  currentMonsterIndex: number;
  createdAt: string;
  updatedAt: string;
}

export default PlayerService;
