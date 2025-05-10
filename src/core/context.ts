import {Logger} from './logger';
import {Cache, ResourceOptions} from './cache-storage';
import {Bounds} from '../css/layout/bounds';

export type ContextOptions = {
    logging: boolean;
    cache?: Cache;
    vrMode?: boolean;
} & ResourceOptions;

export class Context {
    private readonly instanceName = `#${Context.instanceCount++}`;
    readonly logger: Logger;
    readonly cache: Cache;
    readonly vrMode: boolean;

    private static instanceCount = 1;

    constructor(options: ContextOptions, public windowBounds: Bounds) {
        this.logger = new Logger({id: this.instanceName, enabled: options.logging});
        this.cache = options.cache ?? new Cache(this, options);
        this.vrMode = options.vrMode ?? false;
    }
}
