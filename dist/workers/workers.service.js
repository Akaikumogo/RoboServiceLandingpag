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
exports.WorkersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const worker_entity_1 = require("./entities/worker.entity");
let WorkersService = class WorkersService {
    constructor(workerModel) {
        this.workerModel = workerModel;
    }
    async create(createWorkerDto) {
        const worker = new this.workerModel(createWorkerDto);
        return await worker.save();
    }
    async findAll() {
        return await this.workerModel.find();
    }
    async findOne(id) {
        return await this.workerModel.findById(id);
    }
    async update(id, updateWorkerDto) {
        return await this.workerModel.findByIdAndUpdate(id, updateWorkerDto, {
            new: true,
        });
    }
    async remove(id) {
        return await this.workerModel.findByIdAndDelete(id);
    }
};
exports.WorkersService = WorkersService;
exports.WorkersService = WorkersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(worker_entity_1.Worker.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WorkersService);
//# sourceMappingURL=workers.service.js.map