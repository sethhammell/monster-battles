import axios from "axios";

const url = "api/players/";

class PlayerService {
  static getPlayers() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(url).then((res) => {
          const data = res.data;
          resolve(
            data.map((player) => ({
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

  static getPlayer(name) {
    return new Promise((resolve, reject) => {
      try {
        axios.get(`${url}${name}`).then((res) => {
          const player = res.data;
          resolve({
            ...player,
            createdAt: new Date(player.createdAt),
            updatedAt: new Date(player.updatedAt),
          });
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static insertPlayer(exp) {
    return axios.post(url, {
      exp,
    });
  }

  static deletePlayer(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PlayerService;
