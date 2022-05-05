import axios from 'axios';

const url = 'api/players/';

class PlayerService {
  static getPlayers() {
    return new Promise((resolve, reject) => {
      try {
        axios.get(url).then(res => {
          const data = res.data;
          resolve(
            data.map(player => ({
              ...player,
              createdAt: new Date(player.createdAt)
            }))
          );
        });
      } catch(err) {
        reject(err);
      }
    });
  }

  static insertPlayer(text) {
    return axios.post(url, {
      text
    });
  }

  static deletePlayer(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PlayerService;
