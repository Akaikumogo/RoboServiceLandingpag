"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const request_entity_1 = require("./entities/request.entity");
let RequestsService = class RequestsService {
    constructor(requestModel) {
        this.requestModel = requestModel;
    }
    async create(createRequestDto) {
        const request = new this.requestModel(createRequestDto);
        return await request.save();
    }
    async findAll() {
        return await this.requestModel.find();
    }
    async findOne(id) {
        return await this.requestModel.findById(id);
    }
    async update(id) {
        return await this.requestModel.findByIdAndUpdate(id, { readetAt: new Date() }, { new: true });
    }
    async remove(id) {
        return await this.requestModel.findByIdAndDelete(id);
    }
};
exports.RequestsService = RequestsService;
exports.RequestsService = RequestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(request_entity_1.Request.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RequestsService);
//# sourceMappingURL=requests.service.js.map