import { z } from 'zod';
import { orderSchema } from './db/schema';

export type Bindings = {
	BUCKET: R2Bucket;
	SLANT_API: string;
	STRIPE_PUBLISHABLE_KEY: string;
	STRIPE_SECRET_KEY: string;
	STRIPE_WEBHOOK_SECRET: string;
	STRIPE_PRICE_ID: string;
	DOMAIN: string;
	DB: D1Database;
	COLOR_CACHE: Cache;
	JWT_SECRET: string;
	RP_ID: string;
	RP_NAME: string;
	RATE_LIMIT_KV: KVNamespace;
};

export interface SliceResponse {
	message: string;
	data: {
		price: number;
	};
}

export interface ErrorResponse {
	error: string;
	details: Details;
}

export interface Details {
	error: Error;
	url: string;
}

export interface Error {
	message: string;
	status: number;
}


export interface FilamentColorsResponse {
	filaments: Filament[];
}

export interface Filament {
	filament: FilamentType;
	hexColor: string;
	colorTag: string;
	profile: string;
}

// export interface Details {
// 	error: string;
// }

enum FilamentType {
	PLA = 'PLA',
	PETG = 'PETG',
}

export interface ListResponse {
	stl: string;
	key?: string;
	size: number;
	version: string;
}


export type OrderData = z.infer<typeof orderSchema>;

export type OrderResponse = {
	totalPrice: number;
	shippingCost: number;
	printingCost: number;
};


