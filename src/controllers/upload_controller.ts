import { Request, Response } from "express";
import * as fs from "fs";
export const uploadImage = async (_req: Request, res: Response) => {
  try {
    if (!_req.files) {
      return res.status(400).json({
        msg: `Fail to upload data`,
      });
    }
    return res.json({
      msg: `successfull upload data`,
      dato: [_req.files],
    });
  } catch (error) {
    return res.status(500).json({
      msg: `internal error`,
      error: `${error}`,
    });
  }
};

export const downloadImage = async (req: Request, res: Response) => {
  try {
    const { imagename } = req.params;

    const options = {
      root: "src/storage/",
      headers: {
        "Content-Type": "image/" + imagename.split(".")[1],
      },
    };

    const fileName = req.params.imagename;
    const path = `src/storage/${fileName}`;

    if (!fs.existsSync(path)) {
      return res.status(404).json({
        msg: `The image doesn't exist`,
      });
    }
    return res.sendFile(fileName, options, function (err) {
      if (err) {
        return res.status(500).json({
          msg: `internal error`,
          error: `${err}`,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      msg: `internal error`,
      error: `${error}`,
    });
  }
};
