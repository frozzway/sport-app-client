export * from './auth.service';
import { AuthService } from './auth.service';
export * from './categories.service';
import { CategoriesService } from './categories.service';
export * from './clients.service';
import { ClientsService } from './clients.service';
export * from './default.service';
import { DefaultService } from './default.service';
export * from './instructors.service';
import { InstructorsService } from './instructors.service';
export * from './placements.service';
import { PlacementsService } from './placements.service';
export * from './programs.service';
import { ProgramsService } from './programs.service';
export * from './records.service';
import { RecordsService } from './records.service';
export * from './reports.service';
import { ReportsService } from './reports.service';
export * from './schedule.service';
import { ScheduleService } from './schedule.service';
export * from './scheduleSchemas.service';
import { ScheduleSchemasService } from './scheduleSchemas.service';
export const APIS = [AuthService, CategoriesService, ClientsService, DefaultService, InstructorsService, PlacementsService, ProgramsService, RecordsService, ReportsService, ScheduleService, ScheduleSchemasService];
