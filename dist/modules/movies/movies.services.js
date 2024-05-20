"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const movies_model_1 = require("./movies.model");
const createMovie = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("data", typeof data);
    const mongoosedata = yield movies_model_1.MovieModel.create(data);
    return mongoosedata;
});
const getMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movies_model_1.MovieModel.find();
    return result;
});
const getMovie = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movies_model_1.MovieModel.findById(id);
    return result;
});
const updateMovie = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movies_model_1.MovieModel.findByIdAndUpdate(id, data, { new: true });
    return result;
});
const deleteMovie = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movies_model_1.MovieModel.findByIdAndDelete(id);
    return result;
});
const searchMovie = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movies_model_1.MovieModel.find({ title: { $regex: title, $options: "i" } });
    return result;
});
const getTrendingMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movies_model_1.MovieModel.find({ viewCount: { $gt: 5 } });
    return result;
});
const getUpcomingMovies = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movies_model_1.MovieModel.find({ releaseDate: { $gt: new Date() } });
    console.log("result", result);
    return result;
});
exports.default = {
    createMovie,
    getMovies,
    getMovie,
    updateMovie,
    deleteMovie,
    searchMovie,
    getTrendingMovies,
    getUpcomingMovies
};
