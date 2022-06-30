import { MySQL } from "../mysql";

export const Controller = {
  async Home(req, res, next) {
    const sql = await MySQL();
    try {
      const [hollywood] = await sql.execute(
        "SELECT * FROM flixnation WHERE category='hollywood' LIMIT 10;"
      );
      const [bollywood] = await sql.execute(
        "SELECT * FROM flixnation WHERE category='bollywood' LIMIT 10;"
      );

      const [kmovie] = await sql.execute(
        "SELECT * FROM flixnation WHERE category='korean-movie' LIMIT 10;"
      );
      const [kdrama] = await sql.execute(
        "SELECT * FROM flixnation WHERE category='kdrama' LIMIT 10;"
      );
      const [series] = await sql.execute(
        "SELECT * FROM flixnation WHERE category='series' LIMIT 10;"
      );

      sql.end();
      res.render("home", {
        title: "Home Page",
        style: "homepage.css",
        script: "down.js",
        hollywood,
        bollywood,
        kmovie,
        kdrama,
        series,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async Hollywood(req, res, next) {
    const sql = await MySQL();
    try {
      let page = parseInt(req.params.id);
      let hollywood;
      if (page > 1) {
        const [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='hollywood' LIMIT 20 OFFSET ${
            20 * (page - 1)
          };`
        );
        hollywood = data;
      } else {
        let [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='hollywood' LIMIT 20;`
        );
        hollywood = data;
      }
      const [all] = await sql.execute(
        "SELECT COUNT(id) FROM flixnation WHERE category='hollywood'"
      );
      sql.end();

      res.render("category", {
        title: "Hollywood",
        script: "category.js",
        style: "category.css",
        data: hollywood,
        activekey: page,
        total: all[0]["COUNT(id)"],
      });
    } catch (error) {
      console.log(error);
    }
  },

  async Bollywood(req, res, next) {
    const sql = await MySQL();
    try {
      let page = parseInt(req.params.id);
      let bollywood;
      if (page > 1) {
        const [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='bollywood' LIMIT 20 OFFSET ${
            20 * (page - 1)
          };`
        );
        bollywood = data;
      } else {
        let [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='bollywood' LIMIT 20;`
        );
        bollywood = data;
      }
      const [all] = await sql.execute(
        "SELECT COUNT(id) FROM flixnation WHERE category='bollywood'"
      );
      sql.end();

      res.render("category", {
        title: "Bollywood",
        script: "category.js",
        style: "category.css",
        data: bollywood,
        activekey: page,
        total: all[0]["COUNT(id)"],
      });
    } catch (error) {
      console.log(error);
    }
  },
  async Kmovie(req, res, next) {
    const sql = await MySQL();
    try {
      let page = parseInt(req.params.id);
      let kmovie;
      if (page > 1) {
        const [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='korean-movie' LIMIT 20 OFFSET ${
            20 * (page - 1)
          };`
        );
        kmovie = data;
      } else {
        let [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='korean-movie' LIMIT 20;`
        );
        kmovie = data;
      }
      const [all] = await sql.execute(
        "SELECT COUNT(id) FROM flixnation WHERE category='korean-movie'"
      );
      sql.end();

      res.render("category", {
        title: "Korean Movie",
        script: "category.js",
        style: "category.css",
        data: kmovie,
        activekey: page,
        total: all[0]["COUNT(id)"],
      });
    } catch (error) {
      console.log(error);
    }
  },
  async Series(req, res, next) {
    const sql = await MySQL();
    try {
      let page = parseInt(req.params.id);
      let series;
      if (page > 1) {
        const [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='series' LIMIT 20 OFFSET ${
            20 * (page - 1)
          };`
        );
        series = data;
      } else {
        let [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='series' LIMIT 20;`
        );
        series = data;
      }
      const [all] = await sql.execute(
        "SELECT COUNT(id) FROM flixnation WHERE category='series'"
      );
      sql.end();

      res.render("category", {
        title: "Tv-Series",
        script: "category.js",
        style: "category.css",
        data: series,
        activekey: page,
        total: all[0]["COUNT(id)"],
      });
    } catch (error) {
      console.log(error);
    }
  },
  async Kdrama(req, res, next) {
    const sql = await MySQL();
    try {
      let page = parseInt(req.params.id);
      let kdrama;
      if (page > 1) {
        const [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='kdrama' LIMIT 20 OFFSET ${
            20 * (page - 1)
          };`
        );
        kdrama = data;
      } else {
        let [data] = await sql.execute(
          `SELECT * FROM flixnation WHERE category='kdrama' LIMIT 20;`
        );
        kdrama = data;
      }
      const [all] = await sql.execute(
        "SELECT COUNT(id) FROM flixnation WHERE category='kdrama'"
      );
      sql.end();

      res.render("category", {
        title: "K-Drama",
        script: "category.js",
        style: "category.css",
        data: kdrama,
        activekey: page,
        total: all[0]["COUNT(id)"],
      });
    } catch (error) {
      console.log(error);
    }
  },

  async Search(req, res, next) {
    const sql = await MySQL();
    try {
      const title = req.query.title;
      let page = req.query.page;

      const [data] = await sql.execute(
        `SELECT * FROM flixnation WHERE title LIKE '%${title}%' LIMIT 20;`
      );
      const [all] = await sql.execute(
        `SELECT COUNT(id) FROM flixnation WHERE title LIKE '%${title}%'`
      );
      if (!page) page = 1;
      const count = all[0]["COUNT(id)"];
      sql.end();
      res.render("search", {
        title: "Search",
        heading: `Search Results for ${title}`,
        script: "down.js",
        style: "category.css",
        data: data.length == 0 ? { noData: "No Data Found" } : data,
        ...(count > 20 && { activekey: page }),
        ...(count > 20 && { total: count }),
      });
    } catch (error) {
      sql.end();
      console.log(error);
    }
  },
  async getData(req, res, next) {
    const sql = await MySQL();
    try {
      const id = req.query.id;
      const [data] = await sql.execute(`
        SELECT * FROM flixnation where id=${id}`);
      sql.end();
      const Series = ["kdrama", "series"];
      let movie, series;
      if (Series.includes(data[0].category)) {
        series = "series";
        data[0][series] = series;
      } else {
        movie = "movie";
        data[0][movie] = movie;
      }

      res.render("downpage", {
        title: "Download",
        style: "category.css",
        script: "down.js",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
