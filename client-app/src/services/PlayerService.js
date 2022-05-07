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

  static updatePlayer(name, exp) {
    return axios.put(`${url}${name}`, {
      exp,
    });
  }

  static insertPlayer(name, exp) {
    return axios.post(url, {
      name,
      exp,
    });
  }

  static deletePlayer(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PlayerService;
