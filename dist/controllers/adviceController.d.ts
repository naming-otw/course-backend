/// <reference types="qs" />
import { Request, Response } from "express";
declare const _default: {
    queryController: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<void>;
};
export default _default;
