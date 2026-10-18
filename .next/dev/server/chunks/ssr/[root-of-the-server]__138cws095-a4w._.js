module.exports = [
(()=>{"use strict";return[
"[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("pg-587764f78a6c7a9c");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/playwright-core [external] (playwright-core, esm_import, [project]/node_modules/playwright-core)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
var mod = await __turbopack_context__.y("playwright-core-f386a448524c7e9d");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "PrismaPg",
    ()=>PrismaPgAdapterFactory
]);
// src/pg.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/driver-adapter-utils/node_modules/@prisma/debug/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postgres-array/index.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// package.json
var name = "@prisma/adapter-pg";
// src/constants.ts
var FIRST_NORMAL_OBJECT_ID = 16384;
;
;
;
var { types } = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"];
var { builtins: ScalarColumnType, getTypeParser } = types;
var AdditionalScalarColumnType = {
    NAME: 19
};
var ArrayColumnType = {
    BIT_ARRAY: 1561,
    BOOL_ARRAY: 1e3,
    BYTEA_ARRAY: 1001,
    BPCHAR_ARRAY: 1014,
    CHAR_ARRAY: 1002,
    CIDR_ARRAY: 651,
    DATE_ARRAY: 1182,
    FLOAT4_ARRAY: 1021,
    FLOAT8_ARRAY: 1022,
    INET_ARRAY: 1041,
    INT2_ARRAY: 1005,
    INT4_ARRAY: 1007,
    INT8_ARRAY: 1016,
    JSONB_ARRAY: 3807,
    JSON_ARRAY: 199,
    MONEY_ARRAY: 791,
    NUMERIC_ARRAY: 1231,
    OID_ARRAY: 1028,
    TEXT_ARRAY: 1009,
    TIMESTAMP_ARRAY: 1115,
    TIMESTAMPTZ_ARRAY: 1185,
    TIME_ARRAY: 1183,
    UUID_ARRAY: 2951,
    VARBIT_ARRAY: 1563,
    VARCHAR_ARRAY: 1015,
    XML_ARRAY: 143
};
var UnsupportedNativeDataType = class _UnsupportedNativeDataType extends Error {
    // map of type codes to type names
    static typeNames = {
        16: "bool",
        17: "bytea",
        18: "char",
        19: "name",
        20: "int8",
        21: "int2",
        22: "int2vector",
        23: "int4",
        24: "regproc",
        25: "text",
        26: "oid",
        27: "tid",
        28: "xid",
        29: "cid",
        30: "oidvector",
        32: "pg_ddl_command",
        71: "pg_type",
        75: "pg_attribute",
        81: "pg_proc",
        83: "pg_class",
        114: "json",
        142: "xml",
        194: "pg_node_tree",
        269: "table_am_handler",
        325: "index_am_handler",
        600: "point",
        601: "lseg",
        602: "path",
        603: "box",
        604: "polygon",
        628: "line",
        650: "cidr",
        700: "float4",
        701: "float8",
        705: "unknown",
        718: "circle",
        774: "macaddr8",
        790: "money",
        829: "macaddr",
        869: "inet",
        1033: "aclitem",
        1042: "bpchar",
        1043: "varchar",
        1082: "date",
        1083: "time",
        1114: "timestamp",
        1184: "timestamptz",
        1186: "interval",
        1266: "timetz",
        1560: "bit",
        1562: "varbit",
        1700: "numeric",
        1790: "refcursor",
        2202: "regprocedure",
        2203: "regoper",
        2204: "regoperator",
        2205: "regclass",
        2206: "regtype",
        2249: "record",
        2275: "cstring",
        2276: "any",
        2277: "anyarray",
        2278: "void",
        2279: "trigger",
        2280: "language_handler",
        2281: "internal",
        2283: "anyelement",
        2287: "_record",
        2776: "anynonarray",
        2950: "uuid",
        2970: "txid_snapshot",
        3115: "fdw_handler",
        3220: "pg_lsn",
        3310: "tsm_handler",
        3361: "pg_ndistinct",
        3402: "pg_dependencies",
        3500: "anyenum",
        3614: "tsvector",
        3615: "tsquery",
        3642: "gtsvector",
        3734: "regconfig",
        3769: "regdictionary",
        3802: "jsonb",
        3831: "anyrange",
        3838: "event_trigger",
        3904: "int4range",
        3906: "numrange",
        3908: "tsrange",
        3910: "tstzrange",
        3912: "daterange",
        3926: "int8range",
        4072: "jsonpath",
        4089: "regnamespace",
        4096: "regrole",
        4191: "regcollation",
        4451: "int4multirange",
        4532: "nummultirange",
        4533: "tsmultirange",
        4534: "tstzmultirange",
        4535: "datemultirange",
        4536: "int8multirange",
        4537: "anymultirange",
        4538: "anycompatiblemultirange",
        4600: "pg_brin_bloom_summary",
        4601: "pg_brin_minmax_multi_summary",
        5017: "pg_mcv_list",
        5038: "pg_snapshot",
        5069: "xid8",
        5077: "anycompatible",
        5078: "anycompatiblearray",
        5079: "anycompatiblenonarray",
        5080: "anycompatiblerange"
    };
    type;
    constructor(code){
        super();
        this.type = _UnsupportedNativeDataType.typeNames[code] || "Unknown";
        this.message = `Unsupported column type ${this.type}`;
    }
};
function fieldToColumnType(fieldTypeId) {
    switch(fieldTypeId){
        case ScalarColumnType.INT2:
        case ScalarColumnType.INT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32;
        case ScalarColumnType.INT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.FLOAT4:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Float;
        case ScalarColumnType.FLOAT8:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Double;
        case ScalarColumnType.BOOL:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Boolean;
        case ScalarColumnType.DATE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Date;
        case ScalarColumnType.TIME:
        case ScalarColumnType.TIMETZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Time;
        case ScalarColumnType.TIMESTAMP:
        case ScalarColumnType.TIMESTAMPTZ:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTime;
        case ScalarColumnType.NUMERIC:
        case ScalarColumnType.MONEY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Numeric;
        case ScalarColumnType.JSON:
        case ScalarColumnType.JSONB:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Json;
        case ScalarColumnType.UUID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Uuid;
        case ScalarColumnType.OID:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64;
        case ScalarColumnType.BPCHAR:
        case ScalarColumnType.TEXT:
        case ScalarColumnType.VARCHAR:
        case ScalarColumnType.BIT:
        case ScalarColumnType.VARBIT:
        case ScalarColumnType.INET:
        case ScalarColumnType.CIDR:
        case ScalarColumnType.XML:
        case AdditionalScalarColumnType.NAME:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
        case ScalarColumnType.BYTEA:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Bytes;
        case ArrayColumnType.INT2_ARRAY:
        case ArrayColumnType.INT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int32Array;
        case ArrayColumnType.FLOAT4_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].FloatArray;
        case ArrayColumnType.FLOAT8_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DoubleArray;
        case ArrayColumnType.NUMERIC_ARRAY:
        case ArrayColumnType.MONEY_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].NumericArray;
        case ArrayColumnType.BOOL_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BooleanArray;
        case ArrayColumnType.CHAR_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].CharacterArray;
        case ArrayColumnType.BPCHAR_ARRAY:
        case ArrayColumnType.TEXT_ARRAY:
        case ArrayColumnType.VARCHAR_ARRAY:
        case ArrayColumnType.VARBIT_ARRAY:
        case ArrayColumnType.BIT_ARRAY:
        case ArrayColumnType.INET_ARRAY:
        case ArrayColumnType.CIDR_ARRAY:
        case ArrayColumnType.XML_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TextArray;
        case ArrayColumnType.DATE_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateArray;
        case ArrayColumnType.TIME_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].TimeArray;
        case ArrayColumnType.TIMESTAMP_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.TIMESTAMPTZ_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].DateTimeArray;
        case ArrayColumnType.JSON_ARRAY:
        case ArrayColumnType.JSONB_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].JsonArray;
        case ArrayColumnType.BYTEA_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].BytesArray;
        case ArrayColumnType.UUID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].UuidArray;
        case ArrayColumnType.INT8_ARRAY:
        case ArrayColumnType.OID_ARRAY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Int64Array;
        default:
            if (fieldTypeId >= FIRST_NORMAL_OBJECT_ID) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ColumnTypeEnum"].Text;
            }
            throw new UnsupportedNativeDataType(fieldTypeId);
    }
}
function normalize_array(element_normalizer) {
    return (str)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postgres$2d$array$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(str, element_normalizer);
}
function normalize_numeric(numeric) {
    return numeric;
}
function normalize_date(date) {
    return date;
}
function normalize_timestamp(time) {
    return `${time.replace(" ", "T")}+00:00`;
}
function normalize_timestamptz(time) {
    return time.replace(" ", "T").replace(/[+-]\d{2}(:\d{2})?$/, "+00:00");
}
function normalize_time(time) {
    return time;
}
function normalize_timez(time) {
    return time.replace(/[+-]\d{2}(:\d{2})?$/, "");
}
function normalize_money(money) {
    return money.slice(1);
}
function normalize_xml(xml) {
    return xml;
}
function toJson(json) {
    return json;
}
var parsePgBytes = getTypeParser(ScalarColumnType.BYTEA);
var normalizeByteaArray = getTypeParser(ArrayColumnType.BYTEA_ARRAY);
function convertBytes(serializedBytes) {
    return parsePgBytes(serializedBytes);
}
function normalizeBit(bit) {
    return bit;
}
var customParsers = {
    [ScalarColumnType.NUMERIC]: normalize_numeric,
    [ArrayColumnType.NUMERIC_ARRAY]: normalize_array(normalize_numeric),
    [ScalarColumnType.TIME]: normalize_time,
    [ArrayColumnType.TIME_ARRAY]: normalize_array(normalize_time),
    [ScalarColumnType.TIMETZ]: normalize_timez,
    [ScalarColumnType.DATE]: normalize_date,
    [ArrayColumnType.DATE_ARRAY]: normalize_array(normalize_date),
    [ScalarColumnType.TIMESTAMP]: normalize_timestamp,
    [ArrayColumnType.TIMESTAMP_ARRAY]: normalize_array(normalize_timestamp),
    [ScalarColumnType.TIMESTAMPTZ]: normalize_timestamptz,
    [ArrayColumnType.TIMESTAMPTZ_ARRAY]: normalize_array(normalize_timestamptz),
    [ScalarColumnType.MONEY]: normalize_money,
    [ArrayColumnType.MONEY_ARRAY]: normalize_array(normalize_money),
    [ScalarColumnType.JSON]: toJson,
    [ArrayColumnType.JSON_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.JSONB]: toJson,
    [ArrayColumnType.JSONB_ARRAY]: normalize_array(toJson),
    [ScalarColumnType.BYTEA]: convertBytes,
    [ArrayColumnType.BYTEA_ARRAY]: normalizeByteaArray,
    [ArrayColumnType.BIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.VARBIT_ARRAY]: normalize_array(normalizeBit),
    [ArrayColumnType.XML_ARRAY]: normalize_array(normalize_xml)
};
function mapArg(arg, argType) {
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg) && argType.arity === "list") {
        return arg.map((value)=>mapArg(value, argType));
    }
    if (typeof arg === "string" && argType.scalarType === "datetime") {
        arg = new Date(arg);
    }
    if (arg instanceof Date) {
        switch(argType.dbType){
            case "TIME":
            case "TIMETZ":
                return formatTime(arg);
            case "DATE":
                return formatDate(arg);
            default:
                return formatDateTime(arg);
        }
    }
    if (typeof arg === "string" && argType.scalarType === "bytes") {
        return Buffer.from(arg, "base64");
    }
    if (ArrayBuffer.isView(arg)) {
        return new Uint8Array(arg.buffer, arg.byteOffset, arg.byteLength);
    }
    return arg;
}
function formatDateTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate()) + " " + pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
function formatDate(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    return pad(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1) + "-" + pad(date.getUTCDate());
}
function formatTime(date) {
    const pad = (n, z = 2)=>String(n).padStart(z, "0");
    const ms = date.getUTCMilliseconds();
    return pad(date.getUTCHours()) + ":" + pad(date.getUTCMinutes()) + ":" + pad(date.getUTCSeconds()) + (ms ? "." + String(ms).padStart(3, "0") : "");
}
// src/errors.ts
var TLS_ERRORS = /* @__PURE__ */ new Set([
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_CRL",
    "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
    "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
    "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
    "CERT_SIGNATURE_FAILURE",
    "CRL_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CRL_NOT_YET_VALID",
    "CRL_HAS_EXPIRED",
    "ERROR_IN_CERT_NOT_BEFORE_FIELD",
    "ERROR_IN_CERT_NOT_AFTER_FIELD",
    "ERROR_IN_CRL_LAST_UPDATE_FIELD",
    "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "CERT_CHAIN_TOO_LONG",
    "CERT_REVOKED",
    "INVALID_CA",
    "INVALID_PURPOSE",
    "CERT_UNTRUSTED",
    "CERT_REJECTED",
    "HOSTNAME_MISMATCH",
    "ERR_TLS_CERT_ALTNAME_FORMAT",
    "ERR_TLS_CERT_ALTNAME_INVALID"
]);
var SOCKET_ERRORS = /* @__PURE__ */ new Set([
    "ENOTFOUND",
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT"
]);
function convertDriverError(error) {
    if (isSocketError(error)) {
        return mapSocketError(error);
    }
    if (isTlsError(error)) {
        return {
            kind: "TlsConnectionError",
            reason: error.message
        };
    }
    if (isDriverError(error)) {
        return {
            originalCode: error.code,
            originalMessage: error.message,
            ...mapDriverError(error)
        };
    }
    throw error;
}
function mapDriverError(error) {
    switch(error.code){
        case "22001":
            return {
                kind: "LengthMismatch",
                column: error.column
            };
        case "22003":
            return {
                kind: "ValueOutOfRange",
                cause: error.message
            };
        case "22P02":
            return {
                kind: "InvalidInputValue",
                message: error.message
            };
        case "23505":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                let constraint;
                if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                } else if (fields !== void 0) {
                    constraint = {
                        fields
                    };
                }
                let table = error.table;
                if (table === void 0 && fields !== void 0 && fields.length > 0) {
                    const suffix = `_${fields.join("_")}_key`;
                    if (error.constraint?.endsWith(suffix)) {
                        table = error.constraint.slice(0, -suffix.length);
                    }
                }
                return {
                    kind: "UniqueConstraintViolation",
                    constraint,
                    table
                };
            }
        case "23502":
            {
                const fields = error.detail?.match(/Key \(([^)]+)\)/)?.at(1)?.split(", ");
                return {
                    kind: "NullConstraintViolation",
                    constraint: fields !== void 0 ? {
                        fields
                    } : void 0
                };
            }
        case "23503":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "ForeignKeyConstraintViolation",
                    constraint
                };
            }
        case "23001":
            {
                let constraint;
                if (error.column) {
                    constraint = {
                        fields: [
                            error.column
                        ]
                    };
                } else if (error.constraint) {
                    constraint = {
                        index: error.constraint
                    };
                }
                return {
                    kind: "RestrictViolation",
                    constraint
                };
            }
        case "3D000":
            return {
                kind: "DatabaseDoesNotExist",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "28000":
            return {
                kind: "DatabaseAccessDenied",
                db: error.message.split(",").find((s)=>s.startsWith(" database"))?.split('"').at(1)
            };
        case "28P01":
            return {
                kind: "AuthenticationFailed",
                user: error.message.split(" ").pop()?.split('"').at(1)
            };
        case "40001":
        case "40P01":
            return {
                kind: "TransactionWriteConflict"
            };
        case "42P01":
            return {
                kind: "TableDoesNotExist",
                table: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "42703":
            {
                const rawColumn = error.message.match(/^column (.+) does not exist$/)?.at(1);
                return {
                    kind: "ColumnNotFound",
                    column: rawColumn?.replace(/"((?:""|[^"])*)"/g, (_, id)=>id.replaceAll('""', '"'))
                };
            }
        case "42P04":
            return {
                kind: "DatabaseAlreadyExists",
                db: error.message.split(" ").at(1)?.split('"').at(1)
            };
        case "53300":
            return {
                kind: "TooManyConnections",
                cause: error.message
            };
        default:
            return {
                kind: "postgres",
                code: error.code ?? "N/A",
                severity: error.severity ?? "N/A",
                message: error.message,
                detail: error.detail,
                column: error.column,
                hint: error.hint
            };
    }
}
function isDriverError(error) {
    return typeof error.code === "string" && typeof error.message === "string" && typeof error.severity === "string" && (typeof error.detail === "string" || error.detail === void 0) && (typeof error.column === "string" || error.column === void 0) && (typeof error.hint === "string" || error.hint === void 0);
}
function mapSocketError(error) {
    switch(error.code){
        case "ENOTFOUND":
        case "ECONNREFUSED":
            return {
                kind: "DatabaseNotReachable",
                host: error.address ?? error.hostname,
                port: error.port
            };
        case "ECONNRESET":
            return {
                kind: "ConnectionClosed"
            };
        case "ETIMEDOUT":
            return {
                kind: "SocketTimeout"
            };
    }
}
function isSocketError(error) {
    return typeof error.code === "string" && typeof error.syscall === "string" && typeof error.errno === "number" && SOCKET_ERRORS.has(error.code);
}
function isTlsError(error) {
    if (typeof error.code === "string") {
        return TLS_ERRORS.has(error.code);
    }
    switch(error.message){
        case "The server does not support SSL connections":
        case "There was an error establishing an SSL connection":
            return true;
    }
    return false;
}
// src/pg.ts
var types2 = __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].types;
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Debug"])("prisma:driver-adapter:pg");
var PgQueryable = class {
    constructor(client, pgOptions){
        this.client = client;
        this.pgOptions = pgOptions;
    }
    provider = "postgres";
    adapterName = name;
    /**
   * Execute a query given as SQL, interpolating the given parameters.
   */ async queryRaw(query) {
        const tag = "[js::query_raw]";
        debug(`${tag} %O`, query);
        const { fields, rows } = await this.performIO(query);
        const columnNames = fields.map((field)=>field.name);
        let columnTypes = [];
        try {
            columnTypes = fields.map((field)=>fieldToColumnType(field.dataTypeID));
        } catch (e) {
            if (e instanceof UnsupportedNativeDataType) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"]({
                    kind: "UnsupportedNativeDataType",
                    type: e.type
                });
            }
            throw e;
        }
        const udtParser = this.pgOptions?.userDefinedTypeParser;
        if (udtParser) {
            for(let i = 0; i < fields.length; i++){
                const field = fields[i];
                if (field.dataTypeID >= FIRST_NORMAL_OBJECT_ID && !Object.hasOwn(customParsers, field.dataTypeID)) {
                    for(let j = 0; j < rows.length; j++){
                        rows[j][i] = await udtParser(field.dataTypeID, rows[j][i], this);
                    }
                }
            }
        }
        return {
            columnNames,
            columnTypes,
            rows
        };
    }
    /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */ async executeRaw(query) {
        const tag = "[js::execute_raw]";
        debug(`${tag} %O`, query);
        return (await this.performIO(query)).rowCount ?? 0;
    }
    /**
   * Run a query against the database, returning the result set.
   * Should the query fail due to a connection error, the connection is
   * marked as unhealthy.
   */ async performIO(query) {
        const { sql, args } = query;
        const values = args.map((arg, i)=>mapArg(arg, query.argTypes[i]));
        try {
            const result = await this.client.query({
                name: this.pgOptions?.statementNameGenerator?.(query),
                text: sql,
                values,
                rowMode: "array",
                types: {
                    getTypeParser: (oid, format)=>{
                        if (format === "text" && customParsers[oid]) {
                            return customParsers[oid];
                        }
                        return types2.getTypeParser(oid, format);
                    }
                }
            });
            return result;
        } catch (e) {
            this.onError(e);
        }
    }
    onError(error) {
        debug("Error in performIO: %O", error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DriverAdapterError"](convertDriverError(error));
    }
};
var PgTransaction = class extends PgQueryable {
    constructor(client, options, pgOptions, cleanup){
        super(client, pgOptions);
        this.options = options;
        this.pgOptions = pgOptions;
        this.cleanup = cleanup;
    }
    async commit() {
        debug(`[js::commit]`);
        this.cleanup?.();
        this.client.release();
    }
    async rollback() {
        debug(`[js::rollback]`);
        this.cleanup?.();
        this.client.release();
    }
    async createSavepoint(name2) {
        await this.executeRaw({
            sql: `SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async rollbackToSavepoint(name2) {
        await this.executeRaw({
            sql: `ROLLBACK TO SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
    async releaseSavepoint(name2) {
        await this.executeRaw({
            sql: `RELEASE SAVEPOINT ${name2}`,
            args: [],
            argTypes: []
        });
    }
};
var PrismaPgAdapter = class extends PgQueryable {
    constructor(client, pgOptions, release){
        super(client);
        this.pgOptions = pgOptions;
        this.release = release;
    }
    async startTransaction(isolationLevel) {
        const options = {
            usePhantomQuery: false
        };
        const tag = "[js::startTransaction]";
        debug("%s options: %O", tag, options);
        const conn = await this.client.connect().catch((error)=>this.onError(error));
        const onError = (err)=>{
            debug(`Error from pool connection: ${err.message} %O`, err);
            this.pgOptions?.onConnectionError?.(err);
        };
        conn.on("error", onError);
        const cleanup = ()=>{
            conn.removeListener("error", onError);
        };
        try {
            const tx = new PgTransaction(conn, options, this.pgOptions, cleanup);
            await tx.executeRaw({
                sql: "BEGIN",
                args: [],
                argTypes: []
            });
            if (isolationLevel) {
                await tx.executeRaw({
                    sql: `SET TRANSACTION ISOLATION LEVEL ${isolationLevel}`,
                    args: [],
                    argTypes: []
                });
            }
            return tx;
        } catch (error) {
            cleanup();
            conn.release(error);
            this.onError(error);
        }
    }
    async executeScript(script) {
        const statements = script.split(";").map((stmt)=>stmt.trim()).filter((stmt)=>stmt.length > 0);
        for (const stmt of statements){
            try {
                await this.client.query(stmt);
            } catch (error) {
                this.onError(error);
            }
        }
    }
    getConnectionInfo() {
        return {
            schemaName: this.pgOptions?.schema,
            supportsRelationJoins: true
        };
    }
    async dispose() {
        return this.release?.();
    }
    underlyingDriver() {
        return this.client;
    }
};
var PrismaPgAdapterFactory = class {
    constructor(poolOrConfig, options){
        this.options = options;
        if (poolOrConfig instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool) {
            this.externalPool = poolOrConfig;
            this.config = poolOrConfig.options;
        } else if (typeof poolOrConfig === "string") {
            this.externalPool = null;
            this.config = {
                connectionString: poolOrConfig
            };
        } else {
            this.externalPool = null;
            this.config = poolOrConfig;
        }
    }
    provider = "postgres";
    adapterName = name;
    config;
    externalPool;
    async connect() {
        const client = this.externalPool ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool(this.config);
        const onIdleClientError = (err)=>{
            debug(`Error from idle pool client: ${err.message} %O`, err);
            this.options?.onPoolError?.(err);
        };
        client.on("error", onIdleClientError);
        return new PrismaPgAdapter(client, this.options, async ()=>{
            if (this.externalPool) {
                if (this.options?.disposeExternalPool) {
                    await this.externalPool.end();
                    this.externalPool = null;
                } else {
                    this.externalPool.removeListener("error", onIdleClientError);
                }
            } else {
                await client.end();
            }
        });
    }
    async connectToShadowDb() {
        const conn = await this.connect();
        const database = `prisma_migrate_shadow_db_${globalThis.crypto.randomUUID()}`;
        await conn.executeScript(`CREATE DATABASE "${database}"`);
        const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["default"].Pool({
            ...this.config,
            database
        });
        return new PrismaPgAdapter(client, void 0, async ()=>{
            await conn.executeScript(`DROP DATABASE "${database}"`);
            await client.end();
        });
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/@prisma/driver-adapter-utils/dist/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnTypeEnum",
    ()=>ColumnTypeEnum,
    "DriverAdapterError",
    ()=>DriverAdapterError,
    "bindAdapter",
    ()=>bindAdapter,
    "bindMigrationAwareSqlAdapterFactory",
    ()=>bindMigrationAwareSqlAdapterFactory,
    "bindSqlAdapterFactory",
    ()=>bindSqlAdapterFactory,
    "err",
    ()=>err,
    "isDriverAdapterError",
    ()=>isDriverAdapterError,
    "mockAdapter",
    ()=>mockAdapter,
    "mockAdapterErrors",
    ()=>mockAdapterErrors,
    "mockAdapterFactory",
    ()=>mockAdapterFactory,
    "mockMigrationAwareAdapterFactory",
    ()=>mockMigrationAwareAdapterFactory,
    "ok",
    ()=>ok
]);
// src/debug.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/driver-adapter-utils/node_modules/@prisma/debug/dist/index.mjs [app-rsc] (ecmascript)");
;
// src/error.ts
var DriverAdapterError = class extends Error {
    name = "DriverAdapterError";
    cause;
    constructor(payload){
        super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
        this.cause = payload;
    }
};
function isDriverAdapterError(error) {
    return error["name"] === "DriverAdapterError" && typeof error["cause"] === "object";
}
// src/result.ts
function ok(value) {
    return {
        ok: true,
        value,
        map (fn) {
            return ok(fn(value));
        },
        flatMap (fn) {
            return fn(value);
        }
    };
}
function err(error) {
    return {
        ok: false,
        error,
        map () {
            return err(error);
        },
        flatMap () {
            return err(error);
        }
    };
}
// src/binder.ts
var debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$driver$2d$adapter$2d$utils$2f$node_modules$2f40$prisma$2f$debug$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Debug"])("driver-adapter-utils");
var ErrorRegistryInternal = class {
    registeredErrors = [];
    consumeError(id) {
        return this.registeredErrors[id];
    }
    registerNewError(error) {
        let i = 0;
        while(this.registeredErrors[i] !== void 0){
            i++;
        }
        this.registeredErrors[i] = {
            error
        };
        return i;
    }
};
function copySymbolsFromSource(source, target) {
    const symbols = Object.getOwnPropertySymbols(source);
    const symbolObject = Object.fromEntries(symbols.map((symbol)=>[
            symbol,
            true
        ]));
    Object.assign(target, symbolObject);
}
var bindMigrationAwareSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        },
        connectToShadowDb: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connectToShadowDb.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindSqlAdapterFactory = (adapterFactory)=>{
    const errorRegistry = new ErrorRegistryInternal();
    const boundFactory = {
        adapterName: adapterFactory.adapterName,
        provider: adapterFactory.provider,
        errorRegistry,
        connect: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapterFactory.connect.bind(adapterFactory))(...args);
            return ctx.map((ctx2)=>bindAdapter(ctx2, errorRegistry));
        }
    };
    copySymbolsFromSource(adapterFactory, boundFactory);
    return boundFactory;
};
var bindAdapter = (adapter, errorRegistry = new ErrorRegistryInternal())=>{
    const boundAdapter = {
        adapterName: adapter.adapterName,
        errorRegistry,
        queryRaw: wrapAsync(errorRegistry, adapter.queryRaw.bind(adapter)),
        executeRaw: wrapAsync(errorRegistry, adapter.executeRaw.bind(adapter)),
        executeScript: wrapAsync(errorRegistry, adapter.executeScript.bind(adapter)),
        dispose: wrapAsync(errorRegistry, adapter.dispose.bind(adapter)),
        provider: adapter.provider,
        startTransaction: async (...args)=>{
            const ctx = await wrapAsync(errorRegistry, adapter.startTransaction.bind(adapter))(...args);
            return ctx.map((ctx2)=>bindTransaction(errorRegistry, ctx2));
        }
    };
    if (adapter.getConnectionInfo) {
        boundAdapter.getConnectionInfo = wrapSync(errorRegistry, adapter.getConnectionInfo.bind(adapter));
    }
    return boundAdapter;
};
var bindTransaction = (errorRegistry, transaction)=>{
    const boundTransaction = {
        adapterName: transaction.adapterName,
        provider: transaction.provider,
        options: transaction.options,
        queryRaw: wrapAsync(errorRegistry, transaction.queryRaw.bind(transaction)),
        executeRaw: wrapAsync(errorRegistry, transaction.executeRaw.bind(transaction)),
        commit: wrapAsync(errorRegistry, transaction.commit.bind(transaction)),
        rollback: wrapAsync(errorRegistry, transaction.rollback.bind(transaction))
    };
    if (transaction.createSavepoint) {
        boundTransaction.createSavepoint = wrapAsync(errorRegistry, transaction.createSavepoint.bind(transaction));
    }
    if (transaction.rollbackToSavepoint) {
        boundTransaction.rollbackToSavepoint = wrapAsync(errorRegistry, transaction.rollbackToSavepoint.bind(transaction));
    }
    if (transaction.releaseSavepoint) {
        boundTransaction.releaseSavepoint = wrapAsync(errorRegistry, transaction.releaseSavepoint.bind(transaction));
    }
    return boundTransaction;
};
function wrapAsync(registry, fn) {
    return async (...args)=>{
        try {
            return ok(await fn(...args));
        } catch (error) {
            debug("[error@wrapAsync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
function wrapSync(registry, fn) {
    return (...args)=>{
        try {
            return ok(fn(...args));
        } catch (error) {
            debug("[error@wrapSync]", error);
            if (isDriverAdapterError(error)) {
                return err(error.cause);
            }
            const id = registry.registerNewError(error);
            return err({
                kind: "GenericJs",
                id
            });
        }
    };
}
// src/const.ts
var ColumnTypeEnum = {
    // Scalars
    Int32: 0,
    Int64: 1,
    Float: 2,
    Double: 3,
    Numeric: 4,
    Boolean: 5,
    Character: 6,
    Text: 7,
    Date: 8,
    Time: 9,
    DateTime: 10,
    Json: 11,
    Enum: 12,
    Bytes: 13,
    Set: 14,
    Uuid: 15,
    // Arrays
    Int32Array: 64,
    Int64Array: 65,
    FloatArray: 66,
    DoubleArray: 67,
    NumericArray: 68,
    BooleanArray: 69,
    CharacterArray: 70,
    TextArray: 71,
    DateArray: 72,
    TimeArray: 73,
    DateTimeArray: 74,
    JsonArray: 75,
    EnumArray: 76,
    BytesArray: 77,
    UuidArray: 78,
    // Custom
    UnknownNumber: 128
};
// src/mock.ts
var mockAdapterErrors = {
    queryRaw: new Error("Not implemented: queryRaw"),
    executeRaw: new Error("Not implemented: executeRaw"),
    startTransaction: new Error("Not implemented: startTransaction"),
    executeScript: new Error("Not implemented: executeScript"),
    dispose: new Error("Not implemented: dispose")
};
function mockAdapter(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        queryRaw: ()=>Promise.reject(mockAdapterErrors.queryRaw),
        executeRaw: ()=>Promise.reject(mockAdapterErrors.executeRaw),
        startTransaction: ()=>Promise.reject(mockAdapterErrors.startTransaction),
        executeScript: ()=>Promise.reject(mockAdapterErrors.executeScript),
        dispose: ()=>Promise.reject(mockAdapterErrors.dispose),
        [Symbol.for("adapter.mockAdapter")]: true
    };
}
function mockAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockAdapterFactory")]: true
    };
}
function mockMigrationAwareAdapterFactory(provider) {
    return {
        provider,
        adapterName: "@prisma/adapter-mock",
        connect: ()=>Promise.resolve(mockAdapter(provider)),
        connectToShadowDb: ()=>Promise.resolve(mockAdapter(provider)),
        [Symbol.for("adapter.mockMigrationAwareAdapterFactory")]: true
    };
}
;
}),
"[project]/node_modules/@prisma/driver-adapter-utils/node_modules/@prisma/debug/dist/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Debug",
    ()=>Debug,
    "clearLogs",
    ()=>clearLogs,
    "default",
    ()=>index_default,
    "getLogs",
    ()=>getLogs
]);
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// ../../node_modules/.pnpm/kleur@4.1.5/node_modules/kleur/colors.mjs
var colors_exports = {};
__export(colors_exports, {
    $: ()=>$,
    bgBlack: ()=>bgBlack,
    bgBlue: ()=>bgBlue,
    bgCyan: ()=>bgCyan,
    bgGreen: ()=>bgGreen,
    bgMagenta: ()=>bgMagenta,
    bgRed: ()=>bgRed,
    bgWhite: ()=>bgWhite,
    bgYellow: ()=>bgYellow,
    black: ()=>black,
    blue: ()=>blue,
    bold: ()=>bold,
    cyan: ()=>cyan,
    dim: ()=>dim,
    gray: ()=>gray,
    green: ()=>green,
    grey: ()=>grey,
    hidden: ()=>hidden,
    inverse: ()=>inverse,
    italic: ()=>italic,
    magenta: ()=>magenta,
    red: ()=>red,
    reset: ()=>reset,
    strikethrough: ()=>strikethrough,
    underline: ()=>underline,
    white: ()=>white,
    yellow: ()=>yellow
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
    isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
        if (!$.enabled || txt == null) return txt;
        return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
// src/index.ts
var MAX_ARGS_HISTORY = 100;
var COLORS = [
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "red"
];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
    enable (namespace) {
        if (typeof namespace === "string") {
            globalThis.DEBUG = namespace;
        }
    },
    disable () {
        const prev = globalThis.DEBUG;
        globalThis.DEBUG = "";
        return prev;
    },
    // this is the core logic to check if logging should happen or not
    enabled (namespace) {
        const listenedNamespaces = globalThis.DEBUG.split(",").map((s)=>{
            return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        });
        const isListened = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
            return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
        });
        const isExcluded = listenedNamespaces.some((listenedNamespace)=>{
            if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
            return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
        });
        return isListened && !isExcluded;
    },
    log: (...args)=>{
        const [namespace, format, ...rest] = args;
        const logWithFormatting = console.warn ?? console.log;
        logWithFormatting(`${namespace} ${format}`, ...rest);
    },
    formatters: {}
};
function debugCreate(namespace) {
    const instanceProps = {
        color: COLORS[lastColor++ % COLORS.length],
        enabled: topProps.enabled(namespace),
        namespace,
        log: topProps.log,
        extend: ()=>{}
    };
    const debugCall = (...args)=>{
        const { enabled, namespace: namespace2, color, log } = instanceProps;
        if (args.length !== 0) {
            argsHistory.push([
                namespace2,
                ...args
            ]);
        }
        if (argsHistory.length > MAX_ARGS_HISTORY) {
            argsHistory.shift();
        }
        if (topProps.enabled(namespace2) || enabled) {
            const stringArgs = args.map((arg)=>{
                if (typeof arg === "string") {
                    return arg;
                }
                return safeStringify(arg);
            });
            const ms = `+${Date.now() - lastTimestamp}ms`;
            lastTimestamp = Date.now();
            if (globalThis.DEBUG_COLORS) {
                log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
            } else {
                log(namespace2, ...stringArgs, ms);
            }
        }
    };
    return new Proxy(debugCall, {
        get: (_, prop)=>instanceProps[prop],
        set: (_, prop, value)=>instanceProps[prop] = value
    });
}
var Debug = new Proxy(debugCreate, {
    get: (_, prop)=>topProps[prop],
    set: (_, prop, value)=>topProps[prop] = value
});
function safeStringify(value, indent = 2) {
    const cache = /* @__PURE__ */ new Set();
    return JSON.stringify(value, (key, value2)=>{
        if (typeof value2 === "object" && value2 !== null) {
            if (cache.has(value2)) {
                return `[Circular *]`;
            }
            cache.add(value2);
        } else if (typeof value2 === "bigint") {
            return value2.toString();
        }
        return value2;
    }, indent);
}
function getLogs(numChars = 7500) {
    const logs = argsHistory.map(([namespace, ...args])=>{
        return `${namespace} ${args.map((arg)=>{
            if (typeof arg === "string") {
                return arg;
            } else {
                return JSON.stringify(arg);
            }
        }).join(" ")}`;
    }).join("\n");
    if (logs.length < numChars) {
        return logs;
    }
    return logs.slice(-numChars);
}
function clearLogs() {
    argsHistory.length = 0;
}
var index_default = Debug;
;
}),
"[project]/node_modules/abort-controller/dist/abort-controller.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */ Object.defineProperty(exports, '__esModule', {
    value: true
});
var eventTargetShim = __turbopack_context__.r("[project]/node_modules/event-target-shim/dist/event-target-shim.js [app-rsc] (ecmascript)");
/**
 * The signal class.
 * @see https://dom.spec.whatwg.org/#abortsignal
 */ class AbortSignal extends eventTargetShim.EventTarget {
    /**
     * AbortSignal cannot be constructed directly.
     */ constructor(){
        super();
        throw new TypeError("AbortSignal cannot be constructed directly");
    }
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */ get aborted() {
        const aborted = abortedFlags.get(this);
        if (typeof aborted !== "boolean") {
            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        }
        return aborted;
    }
}
eventTargetShim.defineEventAttribute(AbortSignal.prototype, "abort");
/**
 * Create an AbortSignal object.
 */ function createAbortSignal() {
    const signal = Object.create(AbortSignal.prototype);
    eventTargetShim.EventTarget.call(signal);
    abortedFlags.set(signal, false);
    return signal;
}
/**
 * Abort a given signal.
 */ function abortSignal(signal) {
    if (abortedFlags.get(signal) !== false) {
        return;
    }
    abortedFlags.set(signal, true);
    signal.dispatchEvent({
        type: "abort"
    });
}
/**
 * Aborted flag for each instances.
 */ const abortedFlags = new WeakMap();
// Properties should be enumerable.
Object.defineProperties(AbortSignal.prototype, {
    aborted: {
        enumerable: true
    }
});
// `toString()` should return `"[object AbortSignal]"`
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortSignal"
    });
}
/**
 * The AbortController.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */ class AbortController {
    /**
     * Initialize this controller.
     */ constructor(){
        signals.set(this, createAbortSignal());
    }
    /**
     * Returns the `AbortSignal` object associated with this object.
     */ get signal() {
        return getSignal(this);
    }
    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */ abort() {
        abortSignal(getSignal(this));
    }
}
/**
 * Associated signals.
 */ const signals = new WeakMap();
/**
 * Get the associated signal of a given controller.
 */ function getSignal(controller) {
    const signal = signals.get(controller);
    if (signal == null) {
        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
    }
    return signal;
}
// Properties should be enumerable.
Object.defineProperties(AbortController.prototype, {
    signal: {
        enumerable: true
    },
    abort: {
        enumerable: true
    }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortController"
    });
}
exports.AbortController = AbortController;
exports.AbortSignal = AbortSignal;
exports.default = AbortController;
module.exports = AbortController;
module.exports.AbortController = module.exports["default"] = AbortController;
module.exports.AbortSignal = AbortSignal;
}),
"[project]/node_modules/cheerio-select/lib/esm/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDocumentRoot",
    ()=>getDocumentRoot,
    "groupSelectors",
    ()=>groupSelectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio-select/lib/esm/positionals.js [app-rsc] (ecmascript)");
;
function getDocumentRoot(node) {
    while(node.parent)node = node.parent;
    return node;
}
function groupSelectors(selectors) {
    const filteredSelectors = [];
    const plainSelectors = [];
    for (const selector of selectors){
        if (selector.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilter"])) {
            filteredSelectors.push(selector);
        } else {
            plainSelectors.push(selector);
        }
    }
    return [
        plainSelectors,
        filteredSelectors
    ];
}
}),
"[project]/node_modules/cheerio-select/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filter",
    ()=>filter,
    "is",
    ()=>is,
    "select",
    ()=>select,
    "some",
    ()=>some
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-what/lib/es/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio-select/lib/esm/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio-select/lib/esm/positionals.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const UNIVERSAL_SELECTOR = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
    namespace: null
};
const SCOPE_PSEUDO = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
    name: "scope",
    data: null
};
function is(element, selector, options = {}) {
    return some([
        element
    ], selector, options);
}
function some(elements, selector, options = {}) {
    if (typeof selector === "function") return elements.some(selector);
    const [plain, filtered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["groupSelectors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(selector));
    return plain.length > 0 && elements.some((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(plain, options)) || filtered.some((sel)=>filterBySelector(sel, elements, options).length > 0);
}
function filterByPosition(filter, elems, data, options) {
    const num = typeof data === "string" ? parseInt(data, 10) : NaN;
    switch(filter){
        case "first":
        case "lt":
            // Already done in `getLimit`
            return elems;
        case "last":
            return elems.length > 0 ? [
                elems[elems.length - 1]
            ] : elems;
        case "nth":
        case "eq":
            return isFinite(num) && Math.abs(num) < elems.length ? [
                num < 0 ? elems[elems.length + num] : elems[num]
            ] : [];
        case "gt":
            return isFinite(num) ? elems.slice(num + 1) : [];
        case "even":
            return elems.filter((_, i)=>i % 2 === 0);
        case "odd":
            return elems.filter((_, i)=>i % 2 === 1);
        case "not":
            {
                const filtered = new Set(filterParsed(data, elems, options));
                return elems.filter((e)=>!filtered.has(e));
            }
    }
}
function filter(selector, elements, options = {}) {
    return filterParsed((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(selector), elements, options);
}
/**
 * Filter a set of elements by a selector.
 *
 * Will return elements in the original order.
 *
 * @param selector Selector to filter by.
 * @param elements Elements to filter.
 * @param options Options for selector.
 */ function filterParsed(selector, elements, options) {
    if (elements.length === 0) return [];
    const [plainSelectors, filteredSelectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["groupSelectors"])(selector);
    let found;
    if (plainSelectors.length) {
        const filtered = filterElements(elements, plainSelectors, options);
        // If there are no filters, just return
        if (filteredSelectors.length === 0) {
            return filtered;
        }
        // Otherwise, we have to do some filtering
        if (filtered.length) {
            found = new Set(filtered);
        }
    }
    for(let i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++){
        const filteredSelector = filteredSelectors[i];
        const missing = found ? elements.filter((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag(e) && !found.has(e)) : elements;
        if (missing.length === 0) break;
        const filtered = filterBySelector(filteredSelector, elements, options);
        if (filtered.length) {
            if (!found) {
                /*
                 * If we haven't found anything before the last selector,
                 * just return what we found now.
                 */ if (i === filteredSelectors.length - 1) {
                    return filtered;
                }
                found = new Set(filtered);
            } else {
                filtered.forEach((el)=>found.add(el));
            }
        }
    }
    return typeof found !== "undefined" ? found.size === elements.length ? elements : elements.filter((el)=>found.has(el)) : [];
}
function filterBySelector(selector, elements, options) {
    var _a;
    if (selector.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])) {
        /*
         * Get root node, run selector with the scope
         * set to all of our nodes.
         */ const root = (_a = options.root) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentRoot"])(elements[0]);
        const opts = {
            ...options,
            context: elements,
            relativeSelector: false
        };
        selector.push(SCOPE_PSEUDO);
        return findFilterElements(root, selector, opts, true, elements.length);
    }
    // Performance optimization: If we don't have to traverse, just filter set.
    return findFilterElements(elements, selector, options, false, elements.length);
}
function select(selector, root, options = {}, limit = Infinity) {
    if (typeof selector === "function") {
        return find(root, selector);
    }
    const [plain, filtered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["groupSelectors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(selector));
    const results = filtered.map((sel)=>findFilterElements(root, sel, options, true, limit));
    // Plain selectors can be queried in a single go
    if (plain.length) {
        results.push(findElements(root, plain, options, limit));
    }
    if (results.length === 0) {
        return [];
    }
    // If there was only a single selector, just return the result
    if (results.length === 1) {
        return results[0];
    }
    // Sort results, filtering for duplicates
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.uniqueSort(results.reduce((a, b)=>[
            ...a,
            ...b
        ]));
}
/**
 *
 * @param root Element(s) to search from.
 * @param selector Selector to look for.
 * @param options Options for querying.
 * @param queryForSelector Query multiple levels deep for the initial selector, even if it doesn't contain a traversal.
 */ function findFilterElements(root, selector, options, queryForSelector, totalLimit) {
    const filterIndex = selector.findIndex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilter"]);
    const sub = selector.slice(0, filterIndex);
    const filter = selector[filterIndex];
    // If we are at the end of the selector, we can limit the number of elements to retrieve.
    const partLimit = selector.length - 1 === filterIndex ? totalLimit : Infinity;
    /*
     * Set the number of elements to retrieve.
     * Eg. for :first, we only have to get a single element.
     */ const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLimit"])(filter.name, filter.data, partLimit);
    if (limit === 0) return [];
    /*
     * Skip `findElements` call if our selector starts with a positional
     * pseudo.
     */ const elemsNoLimit = sub.length === 0 && !Array.isArray(root) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.getChildren(root).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag) : sub.length === 0 ? (Array.isArray(root) ? root : [
        root
    ]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag) : queryForSelector || sub.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"]) ? findElements(root, [
        sub
    ], options, limit) : filterElements(root, [
        sub
    ], options);
    const elems = elemsNoLimit.slice(0, limit);
    let result = filterByPosition(filter.name, elems, filter.data, options);
    if (result.length === 0 || selector.length === filterIndex + 1) {
        return result;
    }
    const remainingSelector = selector.slice(filterIndex + 1);
    const remainingHasTraversal = remainingSelector.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"]);
    if (remainingHasTraversal) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])(remainingSelector[0])) {
            const { type } = remainingSelector[0];
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling || type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent) {
                // If we have a sibling traversal, we need to also look at the siblings.
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareContext"])(result, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, true);
            }
            // Avoid a traversal-first selector error.
            remainingSelector.unshift(UNIVERSAL_SELECTOR);
        }
        options = {
            ...options,
            // Avoid absolutizing the selector
            relativeSelector: false,
            /*
             * Add a custom root func, to make sure traversals don't match elements
             * that aren't a part of the considered tree.
             */ rootFunc: (el)=>result.includes(el)
        };
    } else if (options.rootFunc && options.rootFunc !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trueFunc"]) {
        options = {
            ...options,
            rootFunc: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trueFunc"]
        };
    }
    /*
     * If we have another filter, recursively call `findFilterElements`,
     * with the `recursive` flag disabled. We only have to look for more
     * elements when we see a traversal.
     *
     * Otherwise,
     */ return remainingSelector.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilter"]) ? findFilterElements(result, remainingSelector, options, false, totalLimit) : remainingHasTraversal ? findElements(result, [
        remainingSelector
    ], options, totalLimit) : filterElements(result, [
        remainingSelector
    ], options);
}
function findElements(root, sel, options, limit) {
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(sel, options, root);
    return find(root, query, limit);
}
function find(root, query, limit = Infinity) {
    const elems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareContext"])(root, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, query.shouldTestNextSiblings);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.find((node)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag(node) && query(node), elems, true, limit);
}
function filterElements(elements, sel, options) {
    const els = (Array.isArray(elements) ? elements : [
        elements
    ]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag);
    if (els.length === 0) return els;
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(sel, options);
    return query === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trueFunc"] ? els : els.filter(query);
}
}),
"[project]/node_modules/cheerio-select/lib/esm/positionals.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterNames",
    ()=>filterNames,
    "getLimit",
    ()=>getLimit,
    "isFilter",
    ()=>isFilter
]);
const filterNames = new Set([
    "first",
    "last",
    "eq",
    "gt",
    "nth",
    "lt",
    "even",
    "odd"
]);
function isFilter(s) {
    if (s.type !== "pseudo") return false;
    if (filterNames.has(s.name)) return true;
    if (s.name === "not" && Array.isArray(s.data)) {
        // Only consider `:not` with embedded filters
        return s.data.some((s)=>s.some(isFilter));
    }
    return false;
}
function getLimit(filter, data, partLimit) {
    const num = data != null ? parseInt(data, 10) : NaN;
    switch(filter){
        case "first":
            return 1;
        case "nth":
        case "eq":
            return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;
        case "lt":
            return isFinite(num) ? num >= 0 ? Math.min(num, partLimit) : Infinity : 0;
        case "gt":
            return isFinite(num) ? Infinity : 0;
        case "odd":
            return 2 * partLimit;
        case "even":
            return 2 * partLimit - 1;
        case "last":
        case "not":
            return Infinity;
    }
}
}),
"[project]/node_modules/cheerio/dist/esm/api/attributes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addClass",
    ()=>addClass,
    "attr",
    ()=>attr,
    "data",
    ()=>data,
    "hasClass",
    ()=>hasClass,
    "prop",
    ()=>prop,
    "removeAttr",
    ()=>removeAttr,
    "removeClass",
    ()=>removeClass,
    "toggleClass",
    ()=>toggleClass,
    "val",
    ()=>val
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/static.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Root$3e$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Root>");
/**
 * Methods for getting and modifying attributes.
 *
 * @module cheerio/attributes
 */ var _a;
;
;
;
;
;
const hasOwn = // @ts-expect-error `hasOwn` is a standard object method
(_a = Object.hasOwn) !== null && _a !== void 0 ? _a : (object, prop)=>Object.prototype.hasOwnProperty.call(object, prop);
const rspace = /\s+/;
const dataAttrPrefix = 'data-';
// Attributes that are booleans
const rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
// Matches strings that look like JSON objects or arrays
const rbrace = /^{[^]*}$|^\[[^]*]$/;
function getAttr(elem, name, xmlMode) {
    var _a;
    if (!elem || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem)) return undefined;
    (_a = elem.attribs) !== null && _a !== void 0 ? _a : elem.attribs = {};
    // Return the entire attribs object if no attribute specified
    if (!name) {
        return elem.attribs;
    }
    if (hasOwn(elem.attribs, name)) {
        // Get the (decoded) attribute
        return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
    }
    // Mimic the DOM and return text content as value for `option's`
    if (elem.name === 'option' && name === 'value') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])(elem.children);
    }
    // Mimic DOM with default value for radios/checkboxes
    if (elem.name === 'input' && (elem.attribs['type'] === 'radio' || elem.attribs['type'] === 'checkbox') && name === 'value') {
        return 'on';
    }
    return undefined;
}
/**
 * Sets the value of an attribute. The attribute will be deleted if the value is
 * `null`.
 *
 * @private
 * @param el - The element to set the attribute on.
 * @param name - The attribute's name.
 * @param value - The attribute's value.
 */ function setAttr(el, name, value) {
    if (value === null) {
        removeAttribute(el, name);
    } else {
        el.attribs[name] = `${value}`;
    }
}
function attr(name, value) {
    // Set the value (with attr map support)
    if (typeof name === 'object' || value !== undefined) {
        if (typeof value === 'function') {
            if (typeof name !== 'string') {
                {
                    throw new Error('Bad combination of arguments.');
                }
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) setAttr(el, name, value.call(el, i, el.attribs[name]));
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) return;
            if (typeof name === 'object') {
                for (const objName of Object.keys(name)){
                    const objValue = name[objName];
                    setAttr(el, objName, objValue);
                }
            } else {
                setAttr(el, name, value);
            }
        });
    }
    return arguments.length > 1 ? this : getAttr(this[0], name, this.options.xmlMode);
}
/**
 * Gets a node's prop.
 *
 * @private
 * @category Attributes
 * @param el - Element to get the prop of.
 * @param name - Name of the prop.
 * @param xmlMode - Disable handling of special HTML attributes.
 * @returns The prop's value.
 */ function getProp(el, name, xmlMode) {
    return name in el ? el[name] : !xmlMode && rboolean.test(name) ? getAttr(el, name, false) !== undefined : getAttr(el, name, xmlMode);
}
/**
 * Sets the value of a prop.
 *
 * @private
 * @param el - The element to set the prop on.
 * @param name - The prop's name.
 * @param value - The prop's value.
 * @param xmlMode - Disable handling of special HTML attributes.
 */ function setProp(el, name, value, xmlMode) {
    if (name in el) {
        // @ts-expect-error Overriding value
        el[name] = value;
    } else {
        setAttr(el, name, !xmlMode && rboolean.test(name) ? value ? '' : null : `${value}`);
    }
}
function prop(name, value) {
    var _a;
    if (typeof name === 'string' && value === undefined) {
        const el = this[0];
        if (!el) return undefined;
        switch(name){
            case 'style':
                {
                    const property = this.css();
                    const keys = Object.keys(property);
                    for(let i = 0; i < keys.length; i++){
                        property[i] = keys[i];
                    }
                    property.length = keys.length;
                    return property;
                }
            case 'tagName':
            case 'nodeName':
                {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) return undefined;
                    return el.name.toUpperCase();
                }
            case 'href':
            case 'src':
                {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) return undefined;
                    const prop = (_a = el.attribs) === null || _a === void 0 ? void 0 : _a[name];
                    if (typeof URL !== 'undefined' && (name === 'href' && (el.tagName === 'a' || el.tagName === 'link') || name === 'src' && (el.tagName === 'img' || el.tagName === 'iframe' || el.tagName === 'audio' || el.tagName === 'video' || el.tagName === 'source')) && prop !== undefined && this.options.baseURI) {
                        return new URL(prop, this.options.baseURI).href;
                    }
                    return prop;
                }
            case 'innerText':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["innerText"])(el);
                }
            case 'textContent':
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textContent"])(el);
                }
            case 'outerHTML':
                {
                    if (el.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Root$3e$__["ElementType"].Root) return this.html();
                    return this.clone().wrap('<container />').parent().html();
                }
            case 'innerHTML':
                {
                    return this.html();
                }
            default:
                {
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) return undefined;
                    return getProp(el, name, this.options.xmlMode);
                }
        }
    }
    if (typeof name === 'object' || value !== undefined) {
        if (typeof value === 'function') {
            if (typeof name === 'object') {
                throw new TypeError('Bad combination of arguments.');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) {
                    setProp(el, name, value.call(el, i, getProp(el, name, this.options.xmlMode)), this.options.xmlMode);
                }
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) return;
            if (typeof name === 'object') {
                for (const key of Object.keys(name)){
                    const val = name[key];
                    setProp(el, key, val, this.options.xmlMode);
                }
            } else {
                setProp(el, name, value, this.options.xmlMode);
            }
        });
    }
    return undefined;
}
/**
 * Sets the value of a data attribute.
 *
 * @private
 * @param elem - The element to set the data attribute on.
 * @param name - The data attribute's name.
 * @param value - The data attribute's value.
 */ function setData(elem, name, value) {
    var _a;
    (_a = elem.data) !== null && _a !== void 0 ? _a : elem.data = {};
    if (typeof name === 'object') Object.assign(elem.data, name);
    else if (typeof name === 'string' && value !== undefined) {
        elem.data[name] = value;
    }
}
/**
 * Read _all_ HTML5 `data-*` attributes from the equivalent HTML5 `data-*`
 * attribute, and cache the value in the node's internal data store.
 *
 * @private
 * @category Attributes
 * @param el - Element to get the data attribute of.
 * @returns A map with all of the data attributes.
 */ function readAllData(el) {
    for (const domName of Object.keys(el.attribs)){
        if (!domName.startsWith(dataAttrPrefix)) {
            continue;
        }
        const jsName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["camelCase"])(domName.slice(dataAttrPrefix.length));
        if (!hasOwn(el.data, jsName)) {
            el.data[jsName] = parseDataValue(el.attribs[domName]);
        }
    }
    return el.data;
}
/**
 * Read the specified attribute from the equivalent HTML5 `data-*` attribute,
 * and (if present) cache the value in the node's internal data store.
 *
 * @private
 * @category Attributes
 * @param el - Element to get the data attribute of.
 * @param name - Name of the data attribute.
 * @returns The data attribute's value.
 */ function readData(el, name) {
    const domName = dataAttrPrefix + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cssCase"])(name);
    const data = el.data;
    if (hasOwn(data, name)) {
        return data[name];
    }
    if (hasOwn(el.attribs, domName)) {
        return data[name] = parseDataValue(el.attribs[domName]);
    }
    return undefined;
}
/**
 * Coerce string data-* attributes to their corresponding JavaScript primitives.
 *
 * @private
 * @category Attributes
 * @param value - The value to parse.
 * @returns The parsed value.
 */ function parseDataValue(value) {
    if (value === 'null') return null;
    if (value === 'true') return true;
    if (value === 'false') return false;
    const num = Number(value);
    if (value === String(num)) return num;
    if (rbrace.test(value)) {
        try {
            return JSON.parse(value);
        } catch  {
        /* Ignore */ }
    }
    return value;
}
function data(name, value) {
    var _a;
    const elem = this[0];
    if (!elem || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem)) return;
    const dataEl = elem;
    (_a = dataEl.data) !== null && _a !== void 0 ? _a : dataEl.data = {};
    // Return the entire data object if no data specified
    if (name == null) {
        return readAllData(dataEl);
    }
    // Set the value (with attr map support)
    if (typeof name === 'object' || value !== undefined) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) {
                if (typeof name === 'object') setData(el, name);
                else setData(el, name, value);
            }
        });
        return this;
    }
    return readData(dataEl, name);
}
function val(value) {
    const querying = arguments.length === 0;
    const element = this[0];
    if (!element || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(element)) return querying ? undefined : this;
    switch(element.name){
        case 'textarea':
            {
                return this.text(value);
            }
        case 'select':
            {
                const option = this.find('option:selected');
                if (!querying) {
                    if (this.attr('multiple') == null && typeof value === 'object') {
                        return this;
                    }
                    this.find('option').removeAttr('selected');
                    const values = typeof value === 'object' ? value : [
                        value
                    ];
                    for (const val of values){
                        this.find(`option[value="${val}"]`).attr('selected', '');
                    }
                    return this;
                }
                return this.attr('multiple') ? option.toArray().map((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])(el.children)) : option.attr('value');
            }
        case 'button':
        case 'input':
        case 'option':
            {
                return querying ? this.attr('value') : this.attr('value', value);
            }
    }
    return undefined;
}
/**
 * Remove an attribute.
 *
 * @private
 * @param elem - Node to remove attribute from.
 * @param name - Name of the attribute to remove.
 */ function removeAttribute(elem, name) {
    if (!elem.attribs || !hasOwn(elem.attribs, name)) return;
    delete elem.attribs[name];
}
/**
 * Splits a space-separated list of names to individual names.
 *
 * @category Attributes
 * @param names - Names to split.
 * @returns - Split names.
 */ function splitNames(names) {
    return names ? names.trim().split(rspace) : [];
}
function removeAttr(name) {
    const attrNames = splitNames(name);
    for (const attrName of attrNames){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (elem)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem)) removeAttribute(elem, attrName);
        });
    }
    return this;
}
function hasClass(className) {
    return this.toArray().some((elem)=>{
        const clazz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && elem.attribs['class'];
        let idx = -1;
        if (clazz && className.length > 0) {
            while((idx = clazz.indexOf(className, idx + 1)) > -1){
                const end = idx + className.length;
                if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end === clazz.length || rspace.test(clazz[end]))) {
                    return true;
                }
            }
        }
        return false;
    });
}
function addClass(value) {
    // Support functions
    if (typeof value === 'function') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) {
                const className = el.attribs['class'] || '';
                addClass.call([
                    el
                ], value.call(el, i, className));
            }
        });
    }
    // Return if no value or not a string or function
    if (!value || typeof value !== 'string') return this;
    const classNames = value.split(rspace);
    const numElements = this.length;
    for(let i = 0; i < numElements; i++){
        const el = this[i];
        // If selected element isn't a tag, move on
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) continue;
        // If we don't already have classes — always set xmlMode to false here, as it doesn't matter for classes
        const className = getAttr(el, 'class', false);
        if (className) {
            let setClass = ` ${className} `;
            // Check if class already exists
            for (const cn of classNames){
                const appendClass = `${cn} `;
                if (!setClass.includes(` ${appendClass}`)) setClass += appendClass;
            }
            setAttr(el, 'class', setClass.trim());
        } else {
            setAttr(el, 'class', classNames.join(' ').trim());
        }
    }
    return this;
}
function removeClass(name) {
    // Handle if value is a function
    if (typeof name === 'function') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) {
                removeClass.call([
                    el
                ], name.call(el, i, el.attribs['class'] || ''));
            }
        });
    }
    const classes = splitNames(name);
    const numClasses = classes.length;
    const removeAll = arguments.length === 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) return;
        if (removeAll) {
            // Short circuit the remove all case as this is the nice one
            el.attribs['class'] = '';
        } else {
            const elClasses = splitNames(el.attribs['class']);
            let changed = false;
            for(let j = 0; j < numClasses; j++){
                const index = elClasses.indexOf(classes[j]);
                if (index !== -1) {
                    elClasses.splice(index, 1);
                    changed = true;
                    /*
                     * We have to do another pass to ensure that there are not duplicate
                     * classes listed
                     */ j--;
                }
            }
            if (changed) {
                el.attribs['class'] = elClasses.join(' ');
            }
        }
    });
}
function toggleClass(value, stateVal) {
    // Support functions
    if (typeof value === 'function') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) {
                toggleClass.call([
                    el
                ], value.call(el, i, el.attribs['class'] || '', stateVal), stateVal);
            }
        });
    }
    // Return if no value or not a string or function
    if (!value || typeof value !== 'string') return this;
    const classNames = value.split(rspace);
    const numClasses = classNames.length;
    const state = typeof stateVal === 'boolean' ? stateVal ? 1 : -1 : 0;
    const numElements = this.length;
    for(let i = 0; i < numElements; i++){
        const el = this[i];
        // If selected element isn't a tag, move on
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) continue;
        const elementClasses = splitNames(el.attribs['class']);
        // Check if class already exists
        for(let j = 0; j < numClasses; j++){
            // Check if the class name is currently defined
            const index = elementClasses.indexOf(classNames[j]);
            // Add if stateValue === true or we are toggling and there is no value
            if (state >= 0 && index === -1) {
                elementClasses.push(classNames[j]);
            } else if (state <= 0 && index !== -1) {
                // Otherwise remove but only if the item exists
                elementClasses.splice(index, 1);
            }
        }
        el.attribs['class'] = elementClasses.join(' ');
    }
    return this;
}
}),
"[project]/node_modules/cheerio/dist/esm/api/css.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "css",
    ()=>css
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
;
function css(prop, val) {
    if (prop != null && val != null || typeof prop === 'object' && !Array.isArray(prop)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) {
                // `prop` can't be an array here anymore.
                setCss(el, prop, val, i);
            }
        });
    }
    if (this.length === 0) {
        return undefined;
    }
    return getCss(this[0], prop);
}
/**
 * Set styles of all elements.
 *
 * @private
 * @param el - Element to set style of.
 * @param prop - Name of property.
 * @param value - Value to set property to.
 * @param idx - Optional index within the selection.
 */ function setCss(el, prop, value, idx) {
    if (typeof prop === 'string') {
        const styles = getCss(el);
        const val = typeof value === 'function' ? value.call(el, idx, styles[prop]) : value;
        if (val === '') {
            delete styles[prop];
        } else if (val != null) {
            styles[prop] = val;
        }
        el.attribs['style'] = stringify(styles);
    } else if (typeof prop === 'object') {
        const keys = Object.keys(prop);
        for(let i = 0; i < keys.length; i++){
            const k = keys[i];
            setCss(el, k, prop[k], i);
        }
    }
}
function getCss(el, prop) {
    if (!el || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el)) return;
    const styles = parse(el.attribs['style']);
    if (typeof prop === 'string') {
        return styles[prop];
    }
    if (Array.isArray(prop)) {
        const newStyles = {};
        for (const item of prop){
            if (styles[item] != null) {
                newStyles[item] = styles[item];
            }
        }
        return newStyles;
    }
    return styles;
}
/**
 * Stringify `obj` to styles.
 *
 * @private
 * @category CSS
 * @param obj - Object to stringify.
 * @returns The serialized styles.
 */ function stringify(obj) {
    return Object.keys(obj).reduce((str, prop)=>`${str}${str ? ' ' : ''}${prop}: ${obj[prop]};`, '');
}
/**
 * Parse `styles`.
 *
 * @private
 * @category CSS
 * @param styles - Styles to be parsed.
 * @returns The parsed styles.
 */ function parse(styles) {
    styles = (styles || '').trim();
    if (!styles) return {};
    const obj = {};
    let key;
    for (const str of styles.split(';')){
        const n = str.indexOf(':');
        // If there is no :, or if it is the first/last character, add to the previous item's value
        if (n < 1 || n === str.length - 1) {
            const trimmed = str.trimEnd();
            if (trimmed.length > 0 && key !== undefined) {
                obj[key] += `;${trimmed}`;
            }
        } else {
            key = str.slice(0, n).trim();
            obj[key] = str.slice(n + 1).trim();
        }
    }
    return obj;
}
}),
"[project]/node_modules/cheerio/dist/esm/api/extract.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extract",
    ()=>extract
]);
function getExtractDescr(descr) {
    var _a;
    if (typeof descr === 'string') {
        return {
            selector: descr,
            value: 'textContent'
        };
    }
    return {
        selector: descr.selector,
        value: (_a = descr.value) !== null && _a !== void 0 ? _a : 'textContent'
    };
}
function extract(map) {
    const ret = {};
    for(const key in map){
        const descr = map[key];
        const isArray = Array.isArray(descr);
        const { selector, value } = getExtractDescr(isArray ? descr[0] : descr);
        const fn = typeof value === 'function' ? value : typeof value === 'string' ? (el)=>this._make(el).prop(value) : (el)=>this._make(el).extract(value);
        if (isArray) {
            ret[key] = this._findBySelector(selector, Number.POSITIVE_INFINITY).map((_, el)=>fn(el, key, ret)).get();
        } else {
            const $ = this._findBySelector(selector, 1);
            ret[key] = $.length > 0 ? fn($[0], key, ret) : undefined;
        }
    }
    return ret;
}
}),
"[project]/node_modules/cheerio/dist/esm/api/forms.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize,
    "serializeArray",
    ()=>serializeArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
/*
 * https://github.com/jquery/jquery/blob/2.1.3/src/manipulation/var/rcheckableType.js
 * https://github.com/jquery/jquery/blob/2.1.3/src/serialize.js
 */ const submittableSelector = 'input,select,textarea,keygen';
const r20 = /%20/g;
const rCRLF = /\r?\n/g;
function serialize() {
    // Convert form elements into name/value objects
    const arr = this.serializeArray();
    // Serialize each element into a key/value string
    const retArr = arr.map((data)=>`${encodeURIComponent(data.name)}=${encodeURIComponent(data.value)}`);
    // Return the resulting serialization
    return retArr.join('&').replace(r20, '+');
}
function serializeArray() {
    // Resolve all form elements from either forms or collections of form elements
    return this.map((_, elem)=>{
        const $elem = this._make(elem);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && elem.name === 'form') {
            return $elem.find(submittableSelector).toArray();
        }
        return $elem.filter(submittableSelector).toArray();
    }).filter(// Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled' + // And cannot be clicked (`[type=submit]`) or are used in `x-www-form-urlencoded` (`[type=file]`)
    ':not(:submit, :button, :image, :reset, :file)' + // And are either checked/don't have a checkable state
    ':matches([checked], :not(:checkbox, :radio))').map((_, elem)=>{
        var _a;
        const $elem = this._make(elem);
        const name = $elem.attr('name'); // We have filtered for elements with a name before.
        // If there is no value set (e.g. `undefined`, `null`), then default value to empty
        const value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : '';
        // If we have an array of values (e.g. `<select multiple>`), return an array of key/value pairs
        if (Array.isArray(value)) {
            return value.map((val)=>/*
             * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
             * These can occur inside of `<textarea>'s`
             */ ({
                    name,
                    value: val.replace(rCRLF, '\r\n')
                }));
        }
        // Otherwise (e.g. `<input type="text">`, return only one key/value pair
        return {
            name,
            value: value.replace(rCRLF, '\r\n')
        };
    }).toArray();
}
}),
"[project]/node_modules/cheerio/dist/esm/api/manipulation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_makeDomArray",
    ()=>_makeDomArray,
    "after",
    ()=>after,
    "append",
    ()=>append,
    "appendTo",
    ()=>appendTo,
    "before",
    ()=>before,
    "clone",
    ()=>clone,
    "empty",
    ()=>empty,
    "html",
    ()=>html,
    "insertAfter",
    ()=>insertAfter,
    "insertBefore",
    ()=>insertBefore,
    "prepend",
    ()=>prepend,
    "prependTo",
    ()=>prependTo,
    "remove",
    ()=>remove,
    "replaceWith",
    ()=>replaceWith,
    "text",
    ()=>text,
    "toString",
    ()=>toString,
    "unwrap",
    ()=>unwrap,
    "wrap",
    ()=>wrap,
    "wrapAll",
    ()=>wrapAll,
    "wrapInner",
    ()=>wrapInner
]);
/**
 * Methods for modifying the DOM structure.
 *
 * @module cheerio/manipulation
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/static.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/manipulation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Tag>");
;
;
;
;
;
;
function _makeDomArray(elem, clone) {
    if (elem == null) {
        return [];
    }
    if (typeof elem === 'string') {
        return this._parse(elem, this.options, false, null).children.slice(0);
    }
    if ('length' in elem) {
        if (elem.length === 1) {
            return this._makeDomArray(elem[0], clone);
        }
        const result = [];
        for(let i = 0; i < elem.length; i++){
            const el = elem[i];
            if (typeof el === 'object') {
                if (el == null) {
                    continue;
                }
                if (!('length' in el)) {
                    result.push(clone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneNode"])(el, true) : el);
                    continue;
                }
            }
            result.push(...this._makeDomArray(el, clone));
        }
        return result;
    }
    return [
        clone ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneNode"])(elem, true) : elem
    ];
}
function _insert(concatenator) {
    return function(...elems) {
        const lastIdx = this.length - 1;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(el)) return;
            const domSrc = typeof elems[0] === 'function' ? elems[0].call(el, i, this._render(el.children)) : elems;
            const dom = this._makeDomArray(domSrc, i < lastIdx);
            concatenator(dom, el.children, el);
        });
    };
}
/**
 * Modify an array in-place, removing some number of elements and adding new
 * elements directly following them.
 *
 * @private
 * @category Manipulation
 * @param array - Target array to splice.
 * @param spliceIdx - Index at which to begin changing the array.
 * @param spliceCount - Number of elements to remove from the array.
 * @param newElems - Elements to insert into the array.
 * @param parent - The parent of the node.
 * @returns The spliced array.
 */ function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
    var _a, _b;
    const spliceArgs = [
        spliceIdx,
        spliceCount,
        ...newElems
    ];
    const prev = spliceIdx === 0 ? null : array[spliceIdx - 1];
    const next = spliceIdx + spliceCount >= array.length ? null : array[spliceIdx + spliceCount];
    /*
     * Before splicing in new elements, ensure they do not already appear in the
     * current array.
     */ for(let idx = 0; idx < newElems.length; ++idx){
        const node = newElems[idx];
        const oldParent = node.parent;
        if (oldParent) {
            const oldSiblings = oldParent.children;
            const prevIdx = oldSiblings.indexOf(node);
            if (prevIdx !== -1) {
                oldParent.children.splice(prevIdx, 1);
                if (parent === oldParent && spliceIdx > prevIdx) {
                    spliceArgs[0]--;
                }
            }
        }
        node.parent = parent;
        if (node.prev) {
            node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
        }
        if (node.next) {
            node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
        }
        node.prev = idx === 0 ? prev : newElems[idx - 1];
        node.next = idx === newElems.length - 1 ? next : newElems[idx + 1];
    }
    if (prev) {
        prev.next = newElems[0];
    }
    if (next) {
        next.prev = newElems[newElems.length - 1];
    }
    return array.splice(...spliceArgs);
}
function appendTo(target) {
    const appendTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(target) ? target : this._make(target);
    appendTarget.append(this);
    return this;
}
function prependTo(target) {
    const prependTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(target) ? target : this._make(target);
    prependTarget.prepend(this);
    return this;
}
const append = _insert((dom, children, parent)=>{
    uniqueSplice(children, children.length, 0, dom, parent);
});
const prepend = _insert((dom, children, parent)=>{
    uniqueSplice(children, 0, 0, dom, parent);
});
function _wrap(insert) {
    return function(wrapper) {
        const lastIdx = this.length - 1;
        const lastParent = this.parents().last();
        for(let i = 0; i < this.length; i++){
            const el = this[i];
            const wrap = typeof wrapper === 'function' ? wrapper.call(el, i, el) : typeof wrapper === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtml"])(wrapper) ? lastParent.find(wrapper).clone() : wrapper;
            const [wrapperDom] = this._makeDomArray(wrap, i < lastIdx);
            if (!wrapperDom || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(wrapperDom)) continue;
            let elInsertLocation = wrapperDom;
            /*
             * Find the deepest child. Only consider the first tag child of each node
             * (ignore text); stop if no children are found.
             */ let j = 0;
            while(j < elInsertLocation.children.length){
                const child = elInsertLocation.children[j];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(child)) {
                    elInsertLocation = child;
                    j = 0;
                } else {
                    j++;
                }
            }
            insert(el, elInsertLocation, [
                wrapperDom
            ]);
        }
        return this;
    };
}
const wrap = _wrap((el, elInsertLocation, wrapperDom)=>{
    const { parent } = el;
    if (!parent) return;
    const siblings = parent.children;
    const index = siblings.indexOf(el);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["update"])([
        el
    ], elInsertLocation);
    /*
     * The previous operation removed the current element from the `siblings`
     * array, so the `dom` array can be inserted without removing any
     * additional elements.
     */ uniqueSplice(siblings, index, 0, wrapperDom, parent);
});
const wrapInner = _wrap((el, elInsertLocation, wrapperDom)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(el)) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["update"])(el.children, elInsertLocation);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["update"])(wrapperDom, el);
});
function unwrap(selector) {
    this.parent(selector).not('body').each((_, el)=>{
        this._make(el).replaceWith(el.children);
    });
    return this;
}
function wrapAll(wrapper) {
    const el = this[0];
    if (el) {
        const wrap = this._make(typeof wrapper === 'function' ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
        // If html is given as wrapper, wrap may contain text elements
        let elInsertLocation;
        for(let i = 0; i < wrap.length; i++){
            if (wrap[i].type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Tag$3e$__["ElementType"].Tag) {
                elInsertLocation = wrap[i];
            }
        }
        let j = 0;
        /*
         * Find the deepest child. Only consider the first tag child of each node
         * (ignore text); stop if no children are found.
         */ while(elInsertLocation && j < elInsertLocation.children.length){
            const child = elInsertLocation.children[j];
            if (child.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Tag$3e$__["ElementType"].Tag) {
                elInsertLocation = child;
                j = 0;
            } else {
                j++;
            }
        }
        if (elInsertLocation) this._make(elInsertLocation).append(this);
    }
    return this;
}
function after(...elems) {
    const lastIdx = this.length - 1;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(el) || !el.parent) {
            return;
        }
        const siblings = el.parent.children;
        const index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */ if (index === -1) return;
        const domSrc = typeof elems[0] === 'function' ? elems[0].call(el, i, this._render(el.children)) : elems;
        const dom = this._makeDomArray(domSrc, i < lastIdx);
        // Add element after `this` element
        uniqueSplice(siblings, index + 1, 0, dom, el.parent);
    });
}
function insertAfter(target) {
    if (typeof target === 'string') {
        target = this._make(target);
    }
    this.remove();
    const clones = [];
    for (const el of this._makeDomArray(target)){
        const clonedSelf = this.clone().toArray();
        const { parent } = el;
        if (!parent) {
            continue;
        }
        const siblings = parent.children;
        const index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */ if (index === -1) continue;
        // Add cloned `this` element(s) after target element
        uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
        clones.push(...clonedSelf);
    }
    return this._make(clones);
}
function before(...elems) {
    const lastIdx = this.length - 1;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(el) || !el.parent) {
            return;
        }
        const siblings = el.parent.children;
        const index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */ if (index === -1) return;
        const domSrc = typeof elems[0] === 'function' ? elems[0].call(el, i, this._render(el.children)) : elems;
        const dom = this._makeDomArray(domSrc, i < lastIdx);
        // Add element before `el` element
        uniqueSplice(siblings, index, 0, dom, el.parent);
    });
}
function insertBefore(target) {
    const targetArr = this._make(target);
    this.remove();
    const clones = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(targetArr, (el)=>{
        const clonedSelf = this.clone().toArray();
        const { parent } = el;
        if (!parent) {
            return;
        }
        const siblings = parent.children;
        const index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */ if (index === -1) return;
        // Add cloned `this` element(s) after target element
        uniqueSplice(siblings, index, 0, clonedSelf, parent);
        clones.push(...clonedSelf);
    });
    return this._make(clones);
}
function remove(selector) {
    // Filter if we have selector
    const elems = selector ? this.filter(selector) : this;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(elems, (el)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeElement"])(el);
        el.prev = el.next = el.parent = null;
    });
    return this;
}
function replaceWith(content) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>{
        const { parent } = el;
        if (!parent) {
            return;
        }
        const siblings = parent.children;
        const cont = typeof content === 'function' ? content.call(el, i, el) : content;
        const dom = this._makeDomArray(cont);
        /*
         * In the case that `dom` contains nodes that already exist in other
         * structures, ensure those nodes are properly removed.
         */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["update"])(dom, null);
        const index = siblings.indexOf(el);
        // Completely remove old element
        uniqueSplice(siblings, index, 1, dom, parent);
        if (!dom.includes(el)) {
            el.parent = el.prev = el.next = null;
        }
    });
}
function empty() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(el)) return;
        for (const child of el.children){
            child.next = child.prev = child.parent = null;
        }
        el.children.length = 0;
    });
}
function html(str) {
    if (str === undefined) {
        const el = this[0];
        if (!el || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(el)) return null;
        return this._render(el.children);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(el)) return;
        for (const child of el.children){
            child.next = child.prev = child.parent = null;
        }
        const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(str) ? str.toArray() : this._parse(`${str}`, this.options, false, el).children;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["update"])(content, el);
    });
}
function toString() {
    return this._render(this);
}
function text(str) {
    // If `str` is undefined, act as a "getter"
    if (str === undefined) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])(this);
    }
    if (typeof str === 'function') {
        // Function support
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el, i)=>this._make(el).text(str.call(el, i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])([
                el
            ]))));
    }
    // Append text node to each selected elements
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (el)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(el)) return;
        for (const child of el.children){
            child.next = child.prev = child.parent = null;
        }
        const textNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"](`${str}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["update"])(textNode, el);
    });
}
function clone() {
    const clone = Array.prototype.map.call(this.get(), (el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneNode"])(el, true));
    // Add a root node around the cloned nodes
    const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"](clone);
    for (const node of clone){
        node.parent = root;
    }
    return this._make(clone);
}
}),
"[project]/node_modules/cheerio/dist/esm/api/traversing.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_findBySelector",
    ()=>_findBySelector,
    "add",
    ()=>add,
    "addBack",
    ()=>addBack,
    "children",
    ()=>children,
    "closest",
    ()=>closest,
    "contents",
    ()=>contents,
    "each",
    ()=>each,
    "end",
    ()=>end,
    "eq",
    ()=>eq,
    "filter",
    ()=>filter,
    "filterArray",
    ()=>filterArray,
    "find",
    ()=>find,
    "first",
    ()=>first,
    "get",
    ()=>get,
    "has",
    ()=>has,
    "index",
    ()=>index,
    "is",
    ()=>is,
    "last",
    ()=>last,
    "map",
    ()=>map,
    "next",
    ()=>next,
    "nextAll",
    ()=>nextAll,
    "nextUntil",
    ()=>nextUntil,
    "not",
    ()=>not,
    "parent",
    ()=>parent,
    "parents",
    ()=>parents,
    "parentsUntil",
    ()=>parentsUntil,
    "prev",
    ()=>prev,
    "prevAll",
    ()=>prevAll,
    "prevUntil",
    ()=>prevUntil,
    "siblings",
    ()=>siblings,
    "slice",
    ()=>slice,
    "toArray",
    ()=>toArray
]);
/**
 * Methods for traversing the DOM structure.
 *
 * @module cheerio/traversing
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cheerio-select/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/static.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/traversal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/helpers.js [app-rsc] (ecmascript)");
;
;
;
;
;
const reContextSelector = /^\s*(?:[+~]|:scope\b)/;
function find(selectorOrHaystack) {
    if (!selectorOrHaystack) {
        return this._make([]);
    }
    if (typeof selectorOrHaystack !== 'string') {
        const haystack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(selectorOrHaystack) ? selectorOrHaystack.toArray() : [
            selectorOrHaystack
        ];
        const context = this.toArray();
        return this._make(haystack.filter((elem)=>context.some((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contains"])(node, elem))));
    }
    return this._findBySelector(selectorOrHaystack, Number.POSITIVE_INFINITY);
}
function _findBySelector(selector, limit) {
    var _a;
    const context = this.toArray();
    const elems = reContextSelector.test(selector) ? context : this.children().toArray();
    const options = {
        context,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
        // Pass options that are recognized by `cheerio-select`
        xmlMode: this.options.xmlMode,
        lowerCaseTags: this.options.lowerCaseTags,
        lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
        pseudos: this.options.pseudos,
        quirksMode: this.options.quirksMode
    };
    return this._make(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["select"](selector, elems, options, limit));
}
/**
 * Creates a matcher, using a particular mapping function. Matchers provide a
 * function that finds elements using a generating function, supporting
 * filtering.
 *
 * @private
 * @param matchMap - Mapping function.
 * @returns - Function for wrapping generating functions.
 */ function _getMatcher(matchMap) {
    return function(fn, ...postFns) {
        return function(selector) {
            var _a;
            let matched = matchMap(fn, this);
            if (selector) {
                matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
            }
            return this._make(// Post processing is only necessary if there is more than one element.
            this.length > 1 && matched.length > 1 ? postFns.reduce((elems, fn)=>fn(elems), matched) : matched);
        };
    };
}
/** Matcher that adds multiple elements for each entry in the input. */ const _matcher = _getMatcher((fn, elems)=>{
    let ret = [];
    for(let i = 0; i < elems.length; i++){
        const value = fn(elems[i]);
        if (value.length > 0) ret = ret.concat(value);
    }
    return ret;
});
/** Matcher that adds at most one element for each entry in the input. */ const _singleMatcher = _getMatcher((fn, elems)=>{
    const ret = [];
    for(let i = 0; i < elems.length; i++){
        const value = fn(elems[i]);
        if (value !== null) {
            ret.push(value);
        }
    }
    return ret;
});
/**
 * Matcher that supports traversing until a condition is met.
 *
 * @param nextElem - Function that returns the next element.
 * @param postFns - Post processing functions.
 * @returns A function usable for `*Until` methods.
 */ function _matchUntil(nextElem, ...postFns) {
    // We use a variable here that is used from within the matcher.
    let matches = null;
    const innerMatcher = _getMatcher((nextElem, elems)=>{
        const matched = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(elems, (elem)=>{
            for(let next; next = nextElem(elem); elem = next){
                // FIXME: `matched` might contain duplicates here and the index is too large.
                if (matches === null || matches === void 0 ? void 0 : matches(next, matched.length)) break;
                matched.push(next);
            }
        });
        return matched;
    })(nextElem, ...postFns);
    return function(selector, filterSelector) {
        // Override `matches` variable with the new target.
        matches = typeof selector === 'string' ? (elem)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"](elem, selector, this.options) : selector ? getFilterFn(selector) : null;
        const ret = innerMatcher.call(this, filterSelector);
        // Set `matches` to `null`, so we don't waste memory.
        matches = null;
        return ret;
    };
}
function _removeDuplicates(elems) {
    return elems.length > 1 ? Array.from(new Set(elems)) : elems;
}
const parent = _singleMatcher(({ parent })=>parent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDocument"])(parent) ? parent : null, _removeDuplicates);
const parents = _matcher((elem)=>{
    const matched = [];
    while(elem.parent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDocument"])(elem.parent)){
        matched.push(elem.parent);
        elem = elem.parent;
    }
    return matched;
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueSort"], // eslint-disable-next-line unicorn/no-array-reverse
(elems)=>elems.reverse());
const parentsUntil = _matchUntil(({ parent })=>parent && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDocument"])(parent) ? parent : null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueSort"], // eslint-disable-next-line unicorn/no-array-reverse
(elems)=>elems.reverse());
function closest(selector) {
    var _a;
    const set = [];
    if (!selector) {
        return this._make(set);
    }
    const selectOpts = {
        xmlMode: this.options.xmlMode,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]
    };
    const selectFn = typeof selector === 'string' ? (elem)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["is"](elem, selector, selectOpts) : getFilterFn(selector);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["domEach"])(this, (elem)=>{
        if (elem && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDocument"])(elem) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem)) {
            elem = elem.parent;
        }
        while(elem && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem)){
            if (selectFn(elem, 0)) {
                // Do not add duplicate elements to the set
                if (!set.includes(elem)) {
                    set.push(elem);
                }
                break;
            }
            elem = elem.parent;
        }
    });
    return this._make(set);
}
const next = _singleMatcher((elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextElementSibling"])(elem));
const nextAll = _matcher((elem)=>{
    const matched = [];
    while(elem.next){
        elem = elem.next;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem)) matched.push(elem);
    }
    return matched;
}, _removeDuplicates);
const nextUntil = _matchUntil((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextElementSibling"])(el), _removeDuplicates);
const prev = _singleMatcher((elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prevElementSibling"])(elem));
const prevAll = _matcher((elem)=>{
    const matched = [];
    while(elem.prev){
        elem = elem.prev;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem)) matched.push(elem);
    }
    return matched;
}, _removeDuplicates);
const prevUntil = _matchUntil((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prevElementSibling"])(el), _removeDuplicates);
const siblings = _matcher((elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiblings"])(elem).filter((el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(el) && el !== elem), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueSort"]);
const children = _matcher((elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChildren"])(elem).filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"]), _removeDuplicates);
function contents() {
    const elems = this.toArray().reduce((newElems, elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(elem) ? newElems.concat(elem.children) : newElems, []);
    return this._make(elems);
}
function each(fn) {
    let i = 0;
    const len = this.length;
    while(i < len && fn.call(this[i], i, this[i]) !== false)++i;
    return this;
}
function map(fn) {
    let elems = [];
    for(let i = 0; i < this.length; i++){
        const el = this[i];
        const val = fn.call(el, i, el);
        if (val != null) {
            elems = elems.concat(val);
        }
    }
    return this._make(elems);
}
/**
 * Creates a function to test if a filter is matched.
 *
 * @param match - A filter.
 * @returns A function that determines if a filter has been matched.
 */ function getFilterFn(match) {
    if (typeof match === 'function') {
        return (el, i)=>match.call(el, i, el);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(match)) {
        return (el)=>Array.prototype.includes.call(match, el);
    }
    return function(el) {
        return match === el;
    };
}
function filter(match) {
    var _a;
    return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
}
function filterArray(nodes, match, xmlMode, root) {
    return typeof match === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["filter"](match, nodes, {
        xmlMode,
        root
    }) : nodes.filter(getFilterFn(match));
}
function is(selector) {
    const nodes = this.toArray();
    return typeof selector === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["some"](nodes.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"]), selector, this.options) : selector ? nodes.some(getFilterFn(selector)) : false;
}
function not(match) {
    let nodes = this.toArray();
    if (typeof match === 'string') {
        const matches = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["filter"](match, nodes, this.options));
        nodes = nodes.filter((el)=>!matches.has(el));
    } else {
        const filterFn = getFilterFn(match);
        nodes = nodes.filter((el, i)=>!filterFn(el, i));
    }
    return this._make(nodes);
}
function has(selectorOrHaystack) {
    return this.filter(typeof selectorOrHaystack === 'string' ? `:has(${selectorOrHaystack})` : (_, el)=>this._make(el).find(selectorOrHaystack).length > 0);
}
function first() {
    return this.length > 1 ? this._make(this[0]) : this;
}
function last() {
    return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
function eq(i) {
    var _a;
    i = +i;
    // Use the first identity optimization if possible
    if (i === 0 && this.length <= 1) return this;
    if (i < 0) i = this.length + i;
    return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
}
function get(i) {
    if (i == null) {
        return this.toArray();
    }
    return this[i < 0 ? this.length + i : i];
}
function toArray() {
    return Array.prototype.slice.call(this);
}
function index(selectorOrNeedle) {
    let $haystack;
    let needle;
    if (selectorOrNeedle == null) {
        $haystack = this.parent().children();
        needle = this[0];
    } else if (typeof selectorOrNeedle === 'string') {
        $haystack = this._make(selectorOrNeedle);
        needle = this[0];
    } else {
        // eslint-disable-next-line @typescript-eslint/no-this-alias, unicorn/no-this-assignment
        $haystack = this;
        needle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(selectorOrNeedle) ? selectorOrNeedle[0] : selectorOrNeedle;
    }
    return Array.prototype.indexOf.call($haystack, needle);
}
function slice(start, end) {
    return this._make(Array.prototype.slice.call(this, start, end));
}
function end() {
    var _a;
    return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
}
function add(other, context) {
    const selection = this._make(other, context);
    const contents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueSort"])([
        ...this.get(),
        ...selection.get()
    ]);
    return this._make(contents);
}
function addBack(selector) {
    return this.prevObject ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject) : this;
}
}),
"[project]/node_modules/cheerio/dist/esm/cheerio.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cheerio",
    ()=>Cheerio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$attributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/api/attributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$traversing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/api/traversing.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/api/manipulation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$css$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/api/css.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$forms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/api/forms.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$extract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/api/extract.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
class Cheerio {
    /**
     * Instance of cheerio. Methods are specified in the modules. Usage of this
     * constructor is not recommended. Please use `$.load` instead.
     *
     * @private
     * @param elements - The new selection.
     * @param root - Sets the root node.
     * @param options - Options for the instance.
     */ constructor(elements, root, options){
        this.length = 0;
        this.options = options;
        this._root = root;
        if (elements) {
            for(let idx = 0; idx < elements.length; idx++){
                this[idx] = elements[idx];
            }
            this.length = elements.length;
        }
    }
}
/** Set a signature of the object. */ Cheerio.prototype.cheerio = '[cheerio object]';
/*
 * Make cheerio an array-like object
 */ Cheerio.prototype.splice = Array.prototype.splice;
// Support for (const element of $(...)) iteration:
Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// Plug in the API
Object.assign(Cheerio.prototype, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$attributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$traversing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$css$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$forms$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$api$2f$extract$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__);
}),
"[project]/node_modules/cheerio/dist/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeStream",
    ()=>decodeStream,
    "fromURL",
    ()=>fromURL,
    "loadBuffer",
    ()=>loadBuffer,
    "stringStream",
    ()=>stringStream
]);
/**
 * @file Batteries-included version of Cheerio. This module includes several
 *   convenience methods for loading documents from various sources.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$load$2d$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/load-parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/static.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2d$htmlparser2$2d$tree$2d$adapter$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/parse5-htmlparser2-tree-adapter/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2d$parser$2d$stream$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/parse5-parser-stream/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/encoding-sniffer/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/undici/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$mimetype$2f$lib$2f$mime$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/whatwg-mimetype/lib/mime-type.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/options.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function loadBuffer(buffer, options = {}) {
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenOptions"])(options);
    const str = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodeBuffer"])(buffer, {
        defaultEncoding: (opts === null || opts === void 0 ? void 0 : opts.xmlMode) ? 'utf8' : 'windows-1252',
        ...options.encoding
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$load$2d$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["load"])(str, opts);
}
function _stringStream(options, cb) {
    var _a;
    if (options === null || options === void 0 ? void 0 : options._useHtmlParser2) {
        const parser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDocumentStream"]((err, document)=>cb(err, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$load$2d$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["load"])(document, options)), options);
        return new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["Writable"]({
            decodeStrings: false,
            write (chunk, _encoding, callback) {
                if (typeof chunk !== 'string') {
                    throw new TypeError('Expected a string');
                }
                parser.write(chunk);
                callback();
            },
            final (callback) {
                parser.end();
                callback();
            }
        });
    }
    options !== null && options !== void 0 ? options : options = {};
    (_a = options.treeAdapter) !== null && _a !== void 0 ? _a : options.treeAdapter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2d$htmlparser2$2d$tree$2d$adapter$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adapter"];
    if (options.scriptingEnabled !== false) {
        options.scriptingEnabled = true;
    }
    const stream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2d$parser$2d$stream$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ParserStream"](options);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["finished"])(stream, (err)=>cb(err, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$load$2d$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["load"])(stream.document, options)));
    return stream;
}
function stringStream(options, cb) {
    return _stringStream((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenOptions"])(options), cb);
}
function decodeStream(options, cb) {
    var _a;
    const { encoding = {}, ...cheerioOptions } = options;
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenOptions"])(cheerioOptions);
    // Set the default encoding to UTF-8 for XML mode
    (_a = encoding.defaultEncoding) !== null && _a !== void 0 ? _a : encoding.defaultEncoding = (opts === null || opts === void 0 ? void 0 : opts.xmlMode) ? 'utf8' : 'windows-1252';
    const decodeStream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodeStream"](encoding);
    const loadStream = _stringStream(opts, cb);
    decodeStream.pipe(loadStream);
    return decodeStream;
}
const defaultRequestOptions = {
    method: 'GET',
    // Set an Accept header
    headers: {
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
};
async function fromURL(url, options = {}) {
    const { requestOptions = defaultRequestOptions, encoding = {}, ...cheerioOptions } = options;
    let undiciStream;
    // Add headers if none were supplied.
    const urlObject = typeof url === 'string' ? new URL(url) : url;
    const streamOptions = {
        headers: defaultRequestOptions.headers,
        path: urlObject.pathname + urlObject.search,
        ...requestOptions
    };
    const promise = new Promise((resolve, reject)=>{
        undiciStream = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Client"](urlObject.origin).compose(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interceptors"].redirect({
            maxRedirections: 5
        })).stream(streamOptions, (res)=>{
            var _a, _b;
            if (res.statusCode < 200 || res.statusCode >= 300) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["errors"].ResponseError('Response Error', res.statusCode, {
                    headers: res.headers
                });
            }
            const contentTypeHeader = (_a = res.headers['content-type']) !== null && _a !== void 0 ? _a : 'text/html';
            const mimeType = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$mimetype$2f$lib$2f$mime$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](Array.isArray(contentTypeHeader) ? contentTypeHeader[0] : contentTypeHeader);
            if (!mimeType.isHTML() && !mimeType.isXML()) {
                throw new RangeError(`The content-type "${mimeType.essence}" is neither HTML nor XML.`);
            }
            // Forward the charset from the header to the decodeStream.
            encoding.transportLayerEncodingLabel = mimeType.parameters.get('charset');
            /*
             * If we allow redirects, we will have entries in the history.
             * The last entry will be the final URL.
             */ const history = (_b = res.context) === null || _b === void 0 ? void 0 : _b.history;
            // Set the `baseURI` to the final URL.
            const baseURI = history ? history[history.length - 1] : urlObject;
            const opts = {
                encoding,
                // Set XML mode based on the MIME type.
                xmlMode: mimeType.isXML(),
                baseURI,
                ...cheerioOptions
            };
            return decodeStream(opts, (err, $)=>err ? reject(err) : resolve($));
        });
    });
    // Let's make sure the request is completed before returning the promise.
    await undiciStream;
    return promise;
}
}),
"[project]/node_modules/cheerio/dist/esm/load-parse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "load",
    ()=>load
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$load$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/load.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parsers$2f$parse5$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/parsers/parse5-adapter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dom-serializer/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
const parse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParse"])((content, options, isDocument, context)=>options._useHtmlParser2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseDocument"])(content, options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parsers$2f$parse5$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseWithParse5"])(content, options, isDocument, context));
const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$load$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLoad"])(parse, (dom, options)=>options._useHtmlParser2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(dom, options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$parsers$2f$parse5$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderWithParse5"])(dom));
}),
"[project]/node_modules/cheerio/dist/esm/load.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLoad",
    ()=>getLoad
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/static.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$cheerio$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/cheerio.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Root$3e$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Root>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Text$3e$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Comment$3e$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Comment>");
;
;
;
;
;
function getLoad(parse, render) {
    /**
     * Create a querying function, bound to a document created from the provided
     * markup.
     *
     * Note that similar to web browser contexts, this operation may introduce
     * `<html>`, `<head>`, and `<body>` elements; set `isDocument` to `false` to
     * switch to fragment mode and disable this.
     *
     * @param content - Markup to be loaded.
     * @param options - Options for the created instance.
     * @param isDocument - Allows parser to be switched to fragment mode.
     * @returns The loaded document.
     * @see {@link https://cheerio.js.org/docs/basics/loading#load} for additional usage information.
     */ return function load(content, options, isDocument = true) {
        if (content == null) {
            throw new Error('cheerio.load() expects a string');
        }
        const internalOpts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenOptions"])(options);
        const initialRoot = parse(content, internalOpts, isDocument, null);
        /**
         * Create an extended class here, so that extensions only live on one
         * instance.
         */ class LoadedCheerio extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$cheerio$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cheerio"] {
            _make(selector, context) {
                const cheerio = initialize(selector, context);
                cheerio.prevObject = this;
                return cheerio;
            }
            _parse(content, options, isDocument, context) {
                return parse(content, options, isDocument, context);
            }
            _render(dom) {
                return render(dom, this.options);
            }
        }
        function initialize(selector, context, root = initialRoot, opts) {
            // $($)
            if (selector && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(selector)) return selector;
            const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenOptions"])(opts, internalOpts);
            const r = typeof root === 'string' ? [
                parse(root, options, false, null)
            ] : 'length' in root ? root : [
                root
            ];
            const rootInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(r) ? r : new LoadedCheerio(r, null, options);
            // Add a cyclic reference, so that calling methods on `_root` never fails.
            rootInstance._root = rootInstance;
            // $(), $(null), $(undefined), $(false)
            if (!selector) {
                return new LoadedCheerio(undefined, rootInstance, options);
            }
            const elements = typeof selector === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtml"])(selector) ? parse(selector, options, false, null).children : isNode(selector) ? [
                selector
            ] : Array.isArray(selector) ? selector : undefined;
            const instance = new LoadedCheerio(elements, rootInstance, options);
            if (elements) {
                return instance;
            }
            if (typeof selector !== 'string') {
                throw new TypeError('Unexpected type of selector');
            }
            // We know that our selector is a string now.
            let search = selector;
            const searchContext = context ? typeof context === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtml"])(context) ? new LoadedCheerio([
                parse(context, options, false, null)
            ], rootInstance, options) : (search = `${context} ${search}`, rootInstance) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCheerio"])(context) ? context : new LoadedCheerio(Array.isArray(context) ? context : [
                context
            ], rootInstance, options) : rootInstance;
            // If we still don't have a context, return
            if (!searchContext) return instance;
            /*
             * #id, .class, tag
             */ return searchContext.find(search);
        }
        // Add in static methods & properties
        Object.assign(initialize, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, {
            load,
            // `_root` and `_options` are used in static methods.
            _root: initialRoot,
            _options: internalOpts,
            // Add `fn` for plugins
            fn: LoadedCheerio.prototype,
            // Add the prototype here to maintain `instanceof` behavior.
            prototype: LoadedCheerio.prototype
        });
        return initialize;
    };
}
function isNode(obj) {
    return(// @ts-expect-error: TS doesn't know about the `name` property.
    !!obj.name || // @ts-expect-error: TS doesn't know about the `type` property.
    obj.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Root$3e$__["ElementType"].Root || // @ts-expect-error: TS doesn't know about the `type` property.
    obj.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Text$3e$__["ElementType"].Text || // @ts-expect-error: TS doesn't know about the `type` property.
    obj.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ElementType__$2e$Comment$3e$__["ElementType"].Comment);
}
}),
"[project]/node_modules/cheerio/dist/esm/options.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flattenOptions",
    ()=>flattenOptions
]);
const defaultOpts = {
    _useHtmlParser2: false
};
function flattenOptions(options, baseOptions) {
    if (!options) {
        return baseOptions !== null && baseOptions !== void 0 ? baseOptions : defaultOpts;
    }
    const opts = {
        _useHtmlParser2: !!options.xmlMode,
        ...baseOptions,
        ...options
    };
    if (options.xml) {
        opts._useHtmlParser2 = true;
        opts.xmlMode = true;
        if (options.xml !== true) {
            Object.assign(opts, options.xml);
        }
    } else if (options.xmlMode) {
        opts._useHtmlParser2 = true;
    }
    return opts;
}
}),
"[project]/node_modules/cheerio/dist/esm/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParse",
    ()=>getParse,
    "update",
    ()=>update
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/manipulation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
;
function getParse(parser) {
    /**
     * Parse a HTML string or a node.
     *
     * @param content - The HTML string or node.
     * @param options - The parser options.
     * @param isDocument - If `content` is a document.
     * @param context - The context node in the DOM tree.
     * @returns The parsed document node.
     */ return function parse(content, options, isDocument, context) {
        if (typeof Buffer !== 'undefined' && Buffer.isBuffer(content)) {
            content = content.toString();
        }
        if (typeof content === 'string') {
            return parser(content, options, isDocument, context);
        }
        const doc = content;
        if (!Array.isArray(doc) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDocument"])(doc)) {
            // If `doc` is already a root, just return it
            return doc;
        }
        // Add content to new root element
        const root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"]([]);
        // Update the DOM using the root
        update(doc, root);
        return root;
    };
}
function update(newChilds, parent) {
    // Normalize
    const arr = Array.isArray(newChilds) ? newChilds : [
        newChilds
    ];
    // Update parent
    if (parent) {
        parent.children = arr;
    } else {
        parent = null;
    }
    // Update neighbors
    for(let i = 0; i < arr.length; i++){
        const node = arr[i];
        // Cleanly remove existing nodes from their previous structures.
        if (node.parent && node.parent.children !== arr) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeElement"])(node);
        }
        if (parent) {
            node.prev = arr[i - 1] || null;
            node.next = arr[i + 1] || null;
        } else {
            node.prev = node.next = null;
        }
        node.parent = parent;
    }
    return parent;
}
}),
"[project]/node_modules/cheerio/dist/esm/parsers/parse5-adapter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseWithParse5",
    ()=>parseWithParse5,
    "renderWithParse5",
    ()=>renderWithParse5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/parse5/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$serializer$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/parse5/dist/serializer/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2d$htmlparser2$2d$tree$2d$adapter$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/parse5-htmlparser2-tree-adapter/dist/index.js [app-rsc] (ecmascript)");
;
;
;
function parseWithParse5(content, options, isDocument, context) {
    var _a;
    (_a = options.treeAdapter) !== null && _a !== void 0 ? _a : options.treeAdapter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2d$htmlparser2$2d$tree$2d$adapter$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adapter"];
    if (options.scriptingEnabled !== false) {
        options.scriptingEnabled = true;
    }
    return isDocument ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(content, options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parseFragment"])(context, content, options);
}
const renderOpts = {
    treeAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2d$htmlparser2$2d$tree$2d$adapter$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adapter"]
};
function renderWithParse5(dom) {
    /*
     * `dom-serializer` passes over the special "root" node and renders the
     * node's children in its place. To mimic this behavior with `parse5`, an
     * equivalent operation must be applied to the input array.
     */ const nodes = 'length' in dom ? dom : [
        dom
    ];
    for(let index = 0; index < nodes.length; index += 1){
        const node = nodes[index];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDocument"])(node)) {
            Array.prototype.splice.call(nodes, index, 1, ...node.children);
        }
    }
    let result = '';
    for(let index = 0; index < nodes.length; index += 1){
        const node = nodes[index];
        result += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$serializer$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serializeOuter"])(node, renderOpts);
    }
    return result;
}
}),
"[project]/node_modules/cheerio/dist/esm/static.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contains",
    ()=>contains,
    "extract",
    ()=>extract,
    "html",
    ()=>html,
    "merge",
    ()=>merge,
    "parseHTML",
    ()=>parseHTML,
    "root",
    ()=>root,
    "text",
    ()=>text,
    "xml",
    ()=>xml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cheerio/dist/esm/options.js [app-rsc] (ecmascript)");
;
;
/**
 * Helper function to render a DOM.
 *
 * @param that - Cheerio instance to render.
 * @param dom - The DOM to render. Defaults to `that`'s root.
 * @param options - Options for rendering.
 * @returns The rendered document.
 */ function render(that, dom, options) {
    if (!that) return '';
    return that(dom !== null && dom !== void 0 ? dom : that._root.children, null, undefined, options).toString();
}
/**
 * Checks if a passed object is an options object.
 *
 * @param dom - Object to check if it is an options object.
 * @param options - Options object.
 * @returns Whether the object is an options object.
 */ function isOptions(dom, options) {
    return !options && typeof dom === 'object' && dom != null && !('length' in dom) && !('type' in dom);
}
function html(dom, options) {
    /*
     * Be flexible about parameters, sometimes we call html(),
     * with options as only parameter
     * check dom argument for dom element specific properties
     * assume there is no 'length' or 'type' properties in the options object
     */ const toRender = isOptions(dom) ? (options = dom, undefined) : dom;
    /*
     * Sometimes `$.html()` is used without preloading html,
     * so fallback non-existing options to the default ones.
     */ const opts = {
        ...this === null || this === void 0 ? void 0 : this._options,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["flattenOptions"])(options)
    };
    return render(this, toRender, opts);
}
function xml(dom) {
    const options = {
        ...this._options,
        xmlMode: true
    };
    return render(this, dom, options);
}
function text(elements) {
    const elems = elements !== null && elements !== void 0 ? elements : this ? this.root() : [];
    let ret = '';
    for(let i = 0; i < elems.length; i++){
        ret += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textContent"])(elems[i]);
    }
    return ret;
}
function parseHTML(data, context, keepScripts = typeof context === 'boolean' ? context : false) {
    if (!data || typeof data !== 'string') {
        return null;
    }
    if (typeof context === 'boolean') {
        keepScripts = context;
    }
    const parsed = this.load(data, this._options, false);
    if (!keepScripts) {
        parsed('script').remove();
    }
    /*
     * The `children` array is used by Cheerio internally to group elements that
     * share the same parents. When nodes created through `parseHTML` are
     * inserted into previously-existing DOM structures, they will be removed
     * from the `children` array. The results of `parseHTML` should remain
     * constant across these operations, so a shallow copy should be returned.
     */ return [
        ...parsed.root()[0].children
    ];
}
function root() {
    return this(this._root);
}
function contains(container, contained) {
    // According to the jQuery API, an element does not "contain" itself
    if (contained === container) {
        return false;
    }
    /*
     * Step up the descendants, stopping when the root element is reached
     * (signaled by `.parent` returning a reference to the same object)
     */ let next = contained;
    while(next && next !== next.parent){
        next = next.parent;
        if (next === container) {
            return true;
        }
    }
    return false;
}
function extract(map) {
    return this.root().extract(map);
}
function merge(arr1, arr2) {
    if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
        return;
    }
    let newLength = arr1.length;
    const len = +arr2.length;
    for(let i = 0; i < len; i++){
        arr1[newLength++] = arr2[i];
    }
    arr1.length = newLength;
    return arr1;
}
/**
 * Checks if an object is array-like.
 *
 * @category Static
 * @param item - Item to check.
 * @returns Indicates if the item is array-like.
 */ function isArrayLike(item) {
    if (Array.isArray(item)) {
        return true;
    }
    if (typeof item !== 'object' || item === null || !('length' in item) || typeof item.length !== 'number' || item.length < 0) {
        return false;
    }
    for(let i = 0; i < item.length; i++){
        if (!(i in item)) {
            return false;
        }
    }
    return true;
}
}),
"[project]/node_modules/cheerio/dist/esm/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if an object is a Cheerio instance.
 *
 * @category Utils
 * @param maybeCheerio - The object to check.
 * @returns Whether the object is a Cheerio instance.
 */ __turbopack_context__.s([
    "camelCase",
    ()=>camelCase,
    "cssCase",
    ()=>cssCase,
    "domEach",
    ()=>domEach,
    "isCheerio",
    ()=>isCheerio,
    "isHtml",
    ()=>isHtml
]);
function isCheerio(maybeCheerio) {
    return maybeCheerio.cheerio != null;
}
function camelCase(str) {
    return str.replace(/[._-](\w|$)/g, (_, x)=>x.toUpperCase());
}
function cssCase(str) {
    return str.replace(/[A-Z]/g, '-$&').toLowerCase();
}
function domEach(array, fn) {
    const len = array.length;
    for(let i = 0; i < len; i++)fn(array[i], i);
    return array;
}
var CharacterCode;
(function(CharacterCode) {
    CharacterCode[CharacterCode["LowerA"] = 97] = "LowerA";
    CharacterCode[CharacterCode["LowerZ"] = 122] = "LowerZ";
    CharacterCode[CharacterCode["UpperA"] = 65] = "UpperA";
    CharacterCode[CharacterCode["UpperZ"] = 90] = "UpperZ";
    CharacterCode[CharacterCode["Exclamation"] = 33] = "Exclamation";
})(CharacterCode || (CharacterCode = {}));
function isHtml(str) {
    if (typeof str !== 'string') {
        return false;
    }
    const tagStart = str.indexOf('<');
    if (tagStart === -1 || tagStart > str.length - 3) return false;
    const tagChar = str.charCodeAt(tagStart + 1);
    return (tagChar >= CharacterCode.LowerA && tagChar <= CharacterCode.LowerZ || tagChar >= CharacterCode.UpperA && tagChar <= CharacterCode.UpperZ || tagChar === CharacterCode.Exclamation) && str.includes('>', tagStart + 2);
}
}),
"[project]/node_modules/css-select/lib/esm/attributes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attributeRules",
    ()=>attributeRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
;
/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */ const reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */ const caseInsensitiveAttributes = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink"
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
const attributeRules = {
    equals (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
            };
        }
        return (elem)=>adapter.getAttributeValue(elem, name) === value && next(elem);
    },
    hyphen (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return function hyphen(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
    },
    element (next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (/\s/.test(value)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        const regex = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
    },
    exists (next, { name }, { adapter }) {
        return (elem)=>adapter.hasAttrib(elem, name) && next(elem);
    },
    start (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (len === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
        };
    },
    end (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = -value.length;
        if (len === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                var _a;
                return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
        };
    },
    any (next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (value === "") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            const regex = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
        };
    },
    not (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (value === "") {
            return (elem)=>!!adapter.getAttributeValue(elem, name) && next(elem);
        } else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
            };
        }
        return (elem)=>adapter.getAttributeValue(elem, name) !== value && next(elem);
    }
};
}),
"[project]/node_modules/css-select/lib/esm/compile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compile",
    ()=>compile,
    "compileToken",
    ()=>compileToken,
    "compileUnsafe",
    ()=>compileUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-what/lib/es/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/sort.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$general$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/general.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-rsc] (ecmascript)");
;
;
;
;
;
function compile(selector, options, context) {
    const next = compileUnsafe(selector, options, context);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureIsTag"])(next, options.adapter);
}
function compileUnsafe(selector, options, context) {
    const token = typeof selector === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(selector) : selector;
    return compileToken(token, options, context);
}
function includesScopePseudo(t) {
    return t.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data)=>data.some(includesScopePseudo)));
}
const DESCENDANT_TOKEN = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant
};
const FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant"
};
const SCOPE_TOKEN = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
    name: "scope",
    data: null
};
/*
 * CSS 4 Spec (Draft): 3.4.1. Absolutizing a Relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */ function absolutize(token, { adapter }, context) {
    // TODO Use better check if the context is a document
    const hasContext = !!(context === null || context === void 0 ? void 0 : context.every((e)=>{
        const parent = adapter.isTag(e) && adapter.getParent(e);
        return e === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PLACEHOLDER_ELEMENT"] || parent && adapter.isTag(parent);
    }));
    for (const t of token){
        if (t.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])(t[0]) && t[0].type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
        // Don't continue in else branch
        } else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
        } else {
            continue;
        }
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, context) {
    var _a;
    token.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    const isArrayContext = Array.isArray(context);
    const finalContext = context && (Array.isArray(context) ? context : [
        context
    ]);
    // Check if the selector is relative
    if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
    } else if (token.some((t)=>t.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])(t[0]))) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    let shouldTestNextSiblings = false;
    const query = token.map((rules)=>{
        if (rules.length >= 2) {
            const [first, second] = rules;
            if (first.type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo || first.name !== "scope") {
            // Ignore
            } else if (isArrayContext && second.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            } else if (second.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent || second.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling) {
                shouldTestNextSiblings = true;
            }
        }
        return compileRules(rules, options, finalContext);
    }).reduce(reduceRules, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce((previous, rule)=>previous === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$general$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compileGeneralSelector"])(previous, rule, options, context, compileToken), (_a = options.rootFunc) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc);
}
function reduceRules(a, b) {
    if (b === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc || a === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) {
        return a;
    }
    if (a === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc || b === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) {
        return b;
    }
    return function combine(elem) {
        return a(elem) || b(elem);
    };
}
}),
"[project]/node_modules/css-select/lib/esm/general.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compileGeneralSelector",
    ()=>compileGeneralSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$attributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/attributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
;
;
;
function getElementParent(node, adapter) {
    const parent = adapter.getParent(node);
    if (parent && adapter.isTag(parent)) {
        return parent;
    }
    return null;
}
function compileGeneralSelector(next, selector, options, context, compileToken) {
    const { adapter, equals } = options;
    switch(selector.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement:
            {
                throw new Error("Pseudo-elements are not supported by css-select");
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
            {
                throw new Error("Column combinators are not yet supported by css-select");
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute:
            {
                if (selector.namespace != null) {
                    throw new Error("Namespaced attributes are not yet supported by css-select");
                }
                if (!options.xmlMode || options.lowerCaseAttributeNames) {
                    selector.name = selector.name.toLowerCase();
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$attributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["attributeRules"][selector.action](next, selector, options);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo:
            {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compilePseudoSelector"])(next, selector, options, context, compileToken);
            }
        // Tags
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Tag:
            {
                if (selector.namespace != null) {
                    throw new Error("Namespaced tag names are not yet supported by css-select");
                }
                let { name } = selector;
                if (!options.xmlMode || options.lowerCaseTags) {
                    name = name.toLowerCase();
                }
                return function tag(elem) {
                    return adapter.getName(elem) === name && next(elem);
                };
            }
        // Traversal
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
            {
                if (options.cacheResults === false || typeof WeakSet === "undefined") {
                    return function descendant(elem) {
                        let current = elem;
                        while(current = getElementParent(current, adapter)){
                            if (next(current)) {
                                return true;
                            }
                        }
                        return false;
                    };
                }
                // @ts-expect-error `ElementNode` is not extending object
                const isFalseCache = new WeakSet();
                return function cachedDescendant(elem) {
                    let current = elem;
                    while(current = getElementParent(current, adapter)){
                        if (!isFalseCache.has(current)) {
                            if (adapter.isTag(current) && next(current)) {
                                return true;
                            }
                            isFalseCache.add(current);
                        }
                    }
                    return false;
                };
            }
        case "_flexibleDescendant":
            {
                // Include element itself, only used while querying an array
                return function flexibleDescendant(elem) {
                    let current = elem;
                    do {
                        if (next(current)) return true;
                    }while (current = getElementParent(current, adapter))
                    return false;
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
            {
                return function parent(elem) {
                    return adapter.getChildren(elem).some((elem)=>adapter.isTag(elem) && next(elem));
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Child:
            {
                return function child(elem) {
                    const parent = adapter.getParent(elem);
                    return parent != null && adapter.isTag(parent) && next(parent);
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
            {
                return function sibling(elem) {
                    const siblings = adapter.getSiblings(elem);
                    for(let i = 0; i < siblings.length; i++){
                        const currentSibling = siblings[i];
                        if (equals(elem, currentSibling)) break;
                        if (adapter.isTag(currentSibling) && next(currentSibling)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
            {
                if (adapter.prevElementSibling) {
                    return function adjacent(elem) {
                        const previous = adapter.prevElementSibling(elem);
                        return previous != null && next(previous);
                    };
                }
                return function adjacent(elem) {
                    const siblings = adapter.getSiblings(elem);
                    let lastElement;
                    for(let i = 0; i < siblings.length; i++){
                        const currentSibling = siblings[i];
                        if (equals(elem, currentSibling)) break;
                        if (adapter.isTag(currentSibling)) {
                            lastElement = currentSibling;
                        }
                    }
                    return !!lastElement && next(lastElement);
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Universal:
            {
                if (selector.namespace != null && selector.namespace !== "*") {
                    throw new Error("Namespaced universal selectors are not yet supported by css-select");
                }
                return next;
            }
    }
}
}),
"[project]/node_modules/css-select/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_compileToken",
    ()=>_compileToken,
    "_compileUnsafe",
    ()=>_compileUnsafe,
    "compile",
    ()=>compile,
    "default",
    ()=>__TURBOPACK__default__export__,
    "is",
    ()=>is,
    "prepareContext",
    ()=>prepareContext,
    "selectAll",
    ()=>selectAll,
    "selectOne",
    ()=>selectOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/compile.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-rsc] (ecmascript)");
// Export filters, pseudos and aliases to allow users to supply their own.
/** @deprecated Use the `pseudos` option instead. */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
const defaultEquals = (a, b)=>a === b;
const defaultOptions = {
    adapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    equals: defaultEquals
};
function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */ // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
    const opts = options !== null && options !== void 0 ? options : defaultOptions;
    // @ts-expect-error Same as above.
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__;
    // @ts-expect-error `equals` does not exist on `Options`
    (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
    return opts;
}
function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        const opts = convertOptionFormats(options);
        return func(selector, opts, context);
    };
}
const compile = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"]);
const _compileUnsafe = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compileUnsafe"]);
const _compileToken = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compileToken"]);
function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
        const opts = convertOptionFormats(options);
        if (typeof query !== "function") {
            query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compileUnsafe"])(query, opts, elements);
        }
        const filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
    };
}
function prepareContext(elems, adapter, shouldTestNextSiblings = false) {
    /*
     * Add siblings if the query requires them.
     * See https://github.com/fb55/css-select/pull/43#issuecomment-225414692
     */ if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter);
    }
    return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
}
function appendNextSiblings(elem, adapter) {
    // Order matters because jQuery seems to check the children before the siblings
    const elems = Array.isArray(elem) ? elem.slice(0) : [
        elem
    ];
    const elemsLength = elems.length;
    for(let i = 0; i < elemsLength; i++){
        const nextSiblings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextSiblings"])(elems[i], adapter);
        elems.push(...nextSiblings);
    }
    return elems;
}
const selectAll = getSelectorFunc((query, elems, options)=>query === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems));
const selectOne = getSelectorFunc((query, elems, options)=>query === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems));
function is(elem, query, options) {
    const opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(query, opts))(elem);
}
const __TURBOPACK__default__export__ = selectAll;
;
}),
"[project]/node_modules/css-select/lib/esm/pseudo-selectors/aliases.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Aliases are pseudos that are expressed as selectors.
 */ __turbopack_context__.s([
    "aliases",
    ()=>aliases
]);
const aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    // JQuery extensions
    // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])"
};
}),
"[project]/node_modules/css-select/lib/esm/pseudo-selectors/filters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filters",
    ()=>filters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nth-check/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
;
;
function getChildFunc(next, adapter) {
    return (elem)=>{
        const parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
    };
}
const filters = {
    contains (next, text, { adapter }) {
        return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
        };
    },
    icontains (next, text, { adapter }) {
        const itext = text.toLowerCase();
        return function icontains(elem) {
            return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
        };
    },
    // Location specific methods
    "nth-child" (next, rule, { adapter, equals }) {
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
        return function nthChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = 0; i < siblings.length; i++){
                if (equals(elem, siblings[i])) break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child" (next, rule, { adapter, equals }) {
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = siblings.length - 1; i >= 0; i--){
                if (equals(elem, siblings[i])) break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type" (next, rule, { adapter, equals }) {
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
        return function nthOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = 0; i < siblings.length; i++){
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling)) break;
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type" (next, rule, { adapter, equals }) {
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = siblings.length - 1; i >= 0; i--){
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling)) break;
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root (next, _rule, { adapter }) {
        return (elem)=>{
            const parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
    },
    scope (next, rule, options, context) {
        const { equals } = options;
        if (!context || context.length === 0) {
            // Equivalent to :root
            return filters["root"](next, rule, options);
        }
        if (context.length === 1) {
            // NOTE: can't be unpacked, as :has uses this for side-effects
            return (elem)=>equals(context[0], elem) && next(elem);
        }
        return (elem)=>context.includes(elem) && next(elem);
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive")
};
/**
 * Dynamic state pseudos. These depend on optional Adapter methods.
 *
 * @param name The name of the adapter method to call.
 * @returns Pseudo for the `filters` object.
 */ function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, { adapter }) {
        const func = adapter[name];
        if (typeof func !== "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
}
}),
"[project]/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compilePseudoSelector",
    ()=>compilePseudoSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-what/lib/es/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/pseudo-selectors/filters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$aliases$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/pseudo-selectors/aliases.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function compilePseudoSelector(next, selector, options, context, compileToken) {
    var _a;
    const { name, data } = selector;
    if (Array.isArray(data)) {
        if (!(name in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subselects"])) {
            throw new Error(`Unknown pseudo-class :${name}(${data})`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subselects"][name](next, data, options, context, compileToken);
    }
    const userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
    const stringPseudo = typeof userPseudo === "string" ? userPseudo : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$aliases$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aliases"][name];
    if (typeof stringPseudo === "string") {
        if (data != null) {
            throw new Error(`Pseudo ${name} doesn't have any arguments`);
        }
        // The alias has to be parsed here, to make sure options are respected.
        const alias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(stringPseudo);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subselects"]["is"](next, alias, options, context, compileToken);
    }
    if (typeof userPseudo === "function") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPseudoArgs"])(userPseudo, name, data, 1);
        return (elem)=>userPseudo(elem, data) && next(elem);
    }
    if (name in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filters"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filters"][name](next, data, options, context);
    }
    if (name in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pseudos"]) {
        const pseudo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pseudos"][name];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPseudoArgs"])(pseudo, name, data, 2);
        return (elem)=>pseudo(elem, options, data) && next(elem);
    }
    throw new Error(`Unknown pseudo-class :${name}`);
}
}),
"[project]/node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// While filters are precompiled, pseudos get called when they are needed
__turbopack_context__.s([
    "pseudos",
    ()=>pseudos,
    "verifyPseudoArgs",
    ()=>verifyPseudoArgs
]);
const pseudos = {
    empty (elem, { adapter }) {
        return !adapter.getChildren(elem).some((elem)=>// FIXME: `getText` call is potentially expensive.
            adapter.isTag(elem) || adapter.getText(elem) !== "");
    },
    "first-child" (elem, { adapter, equals }) {
        if (adapter.prevElementSibling) {
            return adapter.prevElementSibling(elem) == null;
        }
        const firstChild = adapter.getSiblings(elem).find((elem)=>adapter.isTag(elem));
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        for(let i = siblings.length - 1; i >= 0; i--){
            if (equals(elem, siblings[i])) return true;
            if (adapter.isTag(siblings[i])) break;
        }
        return false;
    },
    "first-of-type" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for(let i = 0; i < siblings.length; i++){
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling)) return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "last-of-type" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for(let i = siblings.length - 1; i >= 0; i--){
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling)) return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "only-of-type" (elem, { adapter, equals }) {
        const elemName = adapter.getName(elem);
        return adapter.getSiblings(elem).every((sibling)=>equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName);
    },
    "only-child" (elem, { adapter, equals }) {
        return adapter.getSiblings(elem).every((sibling)=>equals(elem, sibling) || !adapter.isTag(sibling));
    }
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
        if (func.length > argIndex) {
            throw new Error(`Pseudo-class :${name} requires an argument`);
        }
    } else if (func.length === argIndex) {
        throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
    }
}
}),
"[project]/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLACEHOLDER_ELEMENT",
    ()=>PLACEHOLDER_ELEMENT,
    "ensureIsTag",
    ()=>ensureIsTag,
    "getNextSiblings",
    ()=>getNextSiblings,
    "subselects",
    ()=>subselects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-select/lib/esm/sort.js [app-rsc] (ecmascript)");
;
;
const PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
    return (elem)=>adapter.isTag(elem) && next(elem);
}
function getNextSiblings(elem, adapter) {
    const siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1) return [];
    const elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1) return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
function copyOptions(options) {
    // Not copied: context, rootFunc
    return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals
    };
}
const is = (next, token, options, context, compileToken)=>{
    const func = compileToken(token, copyOptions(options), context);
    return func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc ? next : func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc : (elem)=>func(elem) && next(elem);
};
const subselects = {
    is,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */ matches: is,
    where: is,
    not (next, token, options, context, compileToken) {
        const func = compileToken(token, copyOptions(options), context);
        return func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc ? next : func === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc : (elem)=>!func(elem) && next(elem);
    },
    has (next, subselect, options, _context, compileToken) {
        const { adapter } = options;
        const opts = copyOptions(options);
        opts.relativeSelector = true;
        const context = subselect.some((s)=>s.some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])) ? [
            PLACEHOLDER_ELEMENT
        ] : undefined;
        const compiled = compileToken(subselect, opts, context);
        if (compiled === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        const hasElement = ensureIsTag(compiled, adapter);
        // If `compiled` is `trueFunc`, we can skip this.
        if (context && compiled !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) {
            /*
             * `shouldTestNextSiblings` will only be true if the query starts with
             * a traversal (sibling or adjacent). That means we will always have a context.
             */ const { shouldTestNextSiblings = false } = compiled;
            return (elem)=>{
                if (!next(elem)) return false;
                context[0] = elem;
                const childs = adapter.getChildren(elem);
                const nextElements = shouldTestNextSiblings ? [
                    ...childs,
                    ...getNextSiblings(elem, adapter)
                ] : childs;
                return adapter.existsOne(hasElement, nextElements);
            };
        }
        return (elem)=>next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
    }
};
}),
"[project]/node_modules/css-select/lib/esm/sort.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sortByProcedure,
    "isTraversal",
    ()=>isTraversal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
;
const procedure = new Map([
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
        50
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Tag,
        30
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
        1
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
        0
    ]
]);
function isTraversal(token) {
    return !procedure.has(token.type);
}
const attributes = new Map([
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Exists,
        10
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Equals,
        8
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Not,
        7
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Start,
        6
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].End,
        6
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Any,
        5
    ]
]);
function sortByProcedure(arr) {
    const procs = arr.map(getProcedure);
    for(let i = 1; i < arr.length; i++){
        const procNew = procs[i];
        if (procNew < 0) continue;
        for(let j = i - 1; j >= 0 && procNew < procs[j]; j--){
            const token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
function getProcedure(token) {
    var _a, _b;
    let proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
    if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */ proc >>= 1;
        }
    } else if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo) {
        if (!token.data) {
            proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
            proc = 0; // Expensive in any case
        } else if (Array.isArray(token.data)) {
            // Eg. :matches, :not
            proc = Math.min(...token.data.map((d)=>Math.min(...d.map(getProcedure))));
            // If we have traversals, try to avoid executing this selector
            if (proc < 0) {
                proc = 0;
            }
        } else {
            proc = 2;
        }
    }
    return proc;
}
}),
"[project]/node_modules/css-what/lib/es/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTraversal",
    ()=>isTraversal,
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
;
const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [
        126 /* Tilde */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Element
    ],
    [
        94 /* Circumflex */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Start
    ],
    [
        36 /* Dollar */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].End
    ],
    [
        42 /* Asterisk */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Any
    ],
    [
        33 /* ExclamationMark */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Not
    ],
    [
        124 /* Pipe */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Hyphen
    ]
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context"
]);
function isTraversal(selector) {
    switch(selector.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Child:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set([
    "contains",
    "icontains"
]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */  || c === 34 /* DoubleQuote */ ;
}
function isWhitespace(c) {
    return c === 32 /* Space */  || c === 9 /* Tab */  || c === 10 /* NewLine */  || c === 12 /* FormFeed */  || c === 13 /* CarriageReturn */ ;
}
function parse(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while(selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))){
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for(; counter > 0 && selectorIndex < selector.length; selectorIndex++){
            if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  && !isEscaped(selectorIndex)) {
                counter++;
            } else if (selector.charCodeAt(selectorIndex) === 41 /* RightParenthesis */  && !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while(selector.charCodeAt(--pos) === 92 /* BackSlash */ )slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({
            type
        });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks"
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */ function finalizeSubselector() {
        if (tokens.length && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while(selectorIndex < selector.length){
        const firstChar = selector.charCodeAt(selectorIndex);
        switch(firstChar){
            // Whitespace
            case 32 /* Space */ :
            case 9 /* Tab */ :
            case 10 /* NewLine */ :
            case 12 /* FormFeed */ :
            case 13 /* CarriageReturn */ :
                {
                    if (tokens.length === 0 || tokens[0].type !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
                        ensureNotTraversal();
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant
                        });
                    }
                    stripWhitespace(1);
                    break;
                }
            // Traversals
            case 62 /* GreaterThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Child);
                    stripWhitespace(1);
                    break;
                }
            case 60 /* LessThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Parent);
                    stripWhitespace(1);
                    break;
                }
            case 126 /* Tilde */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling);
                    stripWhitespace(1);
                    break;
                }
            case 43 /* Plus */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent);
                    stripWhitespace(1);
                    break;
                }
            // Special attribute selectors: .class, #id
            case 46 /* Period */ :
                {
                    addSpecialAttribute("class", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Element);
                    break;
                }
            case 35 /* Hash */ :
                {
                    addSpecialAttribute("id", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Equals);
                    break;
                }
            case 91 /* LeftSquareBracket */ :
                {
                    stripWhitespace(1);
                    // Determine attribute name and namespace
                    let name;
                    let namespace = null;
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ ) {
                        // Equivalent to no namespace
                        name = getName(1);
                    } else if (selector.startsWith("*|", selectorIndex)) {
                        namespace = "*";
                        name = getName(2);
                    } else {
                        name = getName(0);
                        if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            namespace = name;
                            name = getName(1);
                        }
                    }
                    stripWhitespace(0);
                    // Determine comparison operation
                    let action = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Exists;
                    const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                    if (possibleAction) {
                        action = possibleAction;
                        if (selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            throw new Error("Expected `=`");
                        }
                        stripWhitespace(2);
                    } else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */ ) {
                        action = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Equals;
                        stripWhitespace(1);
                    }
                    // Determine value
                    let value = "";
                    let ignoreCase = null;
                    if (action !== "exists") {
                        if (isQuote(selector.charCodeAt(selectorIndex))) {
                            const quote = selector.charCodeAt(selectorIndex);
                            let sectionEnd = selectorIndex + 1;
                            while(sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))){
                                sectionEnd += 1;
                            }
                            if (selector.charCodeAt(sectionEnd) !== quote) {
                                throw new Error("Attribute value didn't end");
                            }
                            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                            selectorIndex = sectionEnd + 1;
                        } else {
                            const valueStart = selectorIndex;
                            while(selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */  || isEscaped(selectorIndex))){
                                selectorIndex += 1;
                            }
                            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                        }
                        stripWhitespace(0);
                        // See if we have a force ignore flag
                        const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                        // If the forceIgnore flag is set (either `i` or `s`), use that value
                        if (forceIgnore === 115 /* LowerS */ ) {
                            ignoreCase = false;
                            stripWhitespace(1);
                        } else if (forceIgnore === 105 /* LowerI */ ) {
                            ignoreCase = true;
                            stripWhitespace(1);
                        }
                    }
                    if (selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */ ) {
                        throw new Error("Attribute selector didn't terminate");
                    }
                    selectorIndex += 1;
                    const attributeSelector = {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
                        name,
                        action,
                        value,
                        namespace,
                        ignoreCase
                    };
                    tokens.push(attributeSelector);
                    break;
                }
            case 58 /* Colon */ :
                {
                    if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */ ) {
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement,
                            name: getName(2).toLowerCase(),
                            data: selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  ? readValueWithParenthesis() : null
                        });
                        continue;
                    }
                    const name = getName(1).toLowerCase();
                    let data = null;
                    if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */ ) {
                        if (unpackPseudos.has(name)) {
                            if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                                throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                            }
                            data = [];
                            selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                            if (selector.charCodeAt(selectorIndex) !== 41 /* RightParenthesis */ ) {
                                throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                            }
                            selectorIndex += 1;
                        } else {
                            data = readValueWithParenthesis();
                            if (stripQuotesFromPseudos.has(name)) {
                                const quot = data.charCodeAt(0);
                                if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                                    data = data.slice(1, -1);
                                }
                            }
                            data = unescapeCSS(data);
                        }
                    }
                    tokens.push({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
                        name,
                        data
                    });
                    break;
                }
            case 44 /* Comma */ :
                {
                    finalizeSubselector();
                    tokens = [];
                    stripWhitespace(1);
                    break;
                }
            default:
                {
                    if (selector.startsWith("/*", selectorIndex)) {
                        const endIndex = selector.indexOf("*/", selectorIndex + 2);
                        if (endIndex < 0) {
                            throw new Error("Comment was not terminated");
                        }
                        selectorIndex = endIndex + 2;
                        // Remove leading whitespace
                        if (tokens.length === 0) {
                            stripWhitespace(0);
                        }
                        break;
                    }
                    let namespace = null;
                    let name;
                    if (firstChar === 42 /* Asterisk */ ) {
                        selectorIndex += 1;
                        name = "*";
                    } else if (firstChar === 124 /* Pipe */ ) {
                        name = "";
                        if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */ ) {
                            addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator);
                            stripWhitespace(2);
                            break;
                        }
                    } else if (reName.test(selector.slice(selectorIndex))) {
                        name = getName(0);
                    } else {
                        break loop;
                    }
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */ ) {
                        namespace = name;
                        if (selector.charCodeAt(selectorIndex + 1) === 42 /* Asterisk */ ) {
                            name = "*";
                            selectorIndex += 2;
                        } else {
                            name = getName(1);
                        }
                    }
                    tokens.push(name === "*" ? {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
                        namespace
                    } : {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Tag,
                        name,
                        namespace
                    });
                }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}
}),
"[project]/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributeAction",
    ()=>AttributeAction,
    "IgnoreCaseMode",
    ()=>IgnoreCaseMode,
    "SelectorType",
    ()=>SelectorType
]);
var SelectorType;
(function(SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
const IgnoreCaseMode = {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: true,
    CaseSensitive: false
};
var AttributeAction;
(function(AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));
}),
"[project]/node_modules/dom-serializer/lib/esm/foreignNames.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attributeNames",
    ()=>attributeNames,
    "elementNames",
    ()=>elementNames
]);
const elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map((val)=>[
        val.toLowerCase(),
        val
    ]));
const attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map((val)=>[
        val.toLowerCase(),
        val
    ]));
}),
"[project]/node_modules/dom-serializer/lib/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "render",
    ()=>render
]);
/*
 * Module dependencies
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/entities/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/entities/lib/esm/escape.js [app-rsc] (ecmascript)");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dom-serializer/lib/esm/foreignNames.js [app-rsc] (ecmascript)");
;
;
;
const unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */ function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes) return;
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeXML"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeAttribute"];
    return Object.keys(attributes).map((key)=>{
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */ key = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["attributeNames"].get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return `${key}="${encode(value)}"`;
    }).join(" ");
}
/**
 * Self-enclosing tags
 */ const singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
function render(node, options = {}) {
    const nodes = "length" in node ? node : [
        node
    ];
    let output = "";
    for(let i = 0; i < nodes.length; i++){
        output += renderNode(nodes[i], options);
    }
    return output;
}
const __TURBOPACK__default__export__ = render;
function renderNode(node, options) {
    switch(node.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Root"]:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Doctype"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Directive"]:
            return renderDirective(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Comment"]:
            return renderComment(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CDATA"]:
            return renderCdata(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Script"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Style"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"]:
            return renderTag(node, options);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"]:
            return renderText(node, options);
    }
}
const foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]);
const foreignElements = new Set([
    "svg",
    "math"
]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */ elem.name = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["elementNames"].get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */ if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = {
                ...opts,
                xmlMode: false
            };
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = {
            ...opts,
            xmlMode: "foreign"
        };
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode) tag += " ";
        tag += "/>";
    } else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += `</${elem.name}>`;
        }
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a;
    let data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeXML"])(data) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeText"])(data);
    }
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}
}),
"[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Types of elements found in htmlparser2's DOM */ __turbopack_context__.s([
    "CDATA",
    ()=>CDATA,
    "Comment",
    ()=>Comment,
    "Directive",
    ()=>Directive,
    "Doctype",
    ()=>Doctype,
    "ElementType",
    ()=>ElementType,
    "Root",
    ()=>Root,
    "Script",
    ()=>Script,
    "Style",
    ()=>Style,
    "Tag",
    ()=>Tag,
    "Text",
    ()=>Text,
    "isTag",
    ()=>isTag
]);
var ElementType;
(function(ElementType) {
    /** Type for the root element of a document */ ElementType["Root"] = "root";
    /** Type for Text */ ElementType["Text"] = "text";
    /** Type for <? ... ?> */ ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType["Comment"] = "comment";
    /** Type for <script> tags */ ElementType["Script"] = "script";
    /** Type for <style> tags */ ElementType["Style"] = "style";
    /** Type for Any tag */ ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text = ElementType.Text;
const Directive = ElementType.Directive;
const Comment = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA = ElementType.CDATA;
const Doctype = ElementType.Doctype;
}),
"[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Comment>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Root>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Tag>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType .Text>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DomHandler",
    ()=>DomHandler,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
;
;
// Default options
const defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
class DomHandler {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ constructor(callback, options, elementCB){
        /** The elements of the DOM */ this.dom = [];
        /** The root element for the DOM */ this.root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"](this.dom);
        /** Indicated whether parsing has been completed. */ this.done = false;
        /** Stack of open tags. */ this.tagStack = [
            this.root
        ];
        /** A data node that is still being written to. */ this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"](this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB) this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Tag : undefined;
        const element = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Element"](name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        } else {
            const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"](data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Comment"](data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"]("");
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CDATA"]([
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProcessingInstruction"](name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        } else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
const __TURBOPACK__default__export__ = DomHandler;
}),
"[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CDATA",
    ()=>CDATA,
    "Comment",
    ()=>Comment,
    "DataNode",
    ()=>DataNode,
    "Document",
    ()=>Document,
    "Element",
    ()=>Element,
    "Node",
    ()=>Node,
    "NodeWithChildren",
    ()=>NodeWithChildren,
    "ProcessingInstruction",
    ()=>ProcessingInstruction,
    "Text",
    ()=>Text,
    "cloneNode",
    ()=>cloneNode,
    "hasChildren",
    ()=>hasChildren,
    "isCDATA",
    ()=>isCDATA,
    "isComment",
    ()=>isComment,
    "isDirective",
    ()=>isDirective,
    "isDocument",
    ()=>isDocument,
    "isTag",
    ()=>isTag,
    "isText",
    ()=>isText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
;
class Node {
    constructor(){
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
class DataNode extends Node {
    /**
     * @param data The content of the data node
     */ constructor(data){
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
class Text extends DataNode {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Text;
    }
    get nodeType() {
        return 3;
    }
}
class Comment extends DataNode {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Comment;
    }
    get nodeType() {
        return 8;
    }
}
class ProcessingInstruction extends DataNode {
    constructor(name, data){
        super(data);
        this.name = name;
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Directive;
    }
    get nodeType() {
        return 1;
    }
}
class NodeWithChildren extends Node {
    /**
     * @param children Children of the node. Only certain node types can have children.
     */ constructor(children){
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */ get firstChild() {
        var _a;
        return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    }
    /** Last child of the node. */ get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class CDATA extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
    }
    get nodeType() {
        return 4;
    }
}
class Document extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Root;
    }
    get nodeType() {
        return 9;
    }
}
class Element extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ constructor(name, attribs, children = [], type = name === "script" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Script : name === "style" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Style : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Tag){
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name)=>{
            var _a, _b;
            return {
                name,
                value: this.attribs[name],
                namespace: (_a = this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
            };
        });
    }
}
function isTag(node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(node);
}
function isCDATA(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
}
function isText(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Text;
}
function isComment(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Comment;
}
function isDirective(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Directive;
}
function isDocument(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Root;
}
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) {
        result = new Text(node.data);
    } else if (isComment(node)) {
        result = new Comment(node.data);
    } else if (isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, {
            ...node.attribs
        }, children);
        children.forEach((child)=>child.parent = clone);
        if (node.namespace != null) {
            clone.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = {
                ...node["x-attribsNamespace"]
            };
        }
        if (node["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = {
                ...node["x-attribsPrefix"]
            };
        }
        result = clone;
    } else if (isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new CDATA(children);
        children.forEach((child)=>child.parent = clone);
        result = clone;
    } else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        children.forEach((child)=>child.parent = clone);
        if (node["x-mode"]) {
            clone["x-mode"] = node["x-mode"];
        }
        result = clone;
    } else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
function cloneChildren(childs) {
    const children = childs.map((child)=>cloneNode(child, true));
    for(let i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}
}),
"[project]/node_modules/domutils/lib/esm/feeds.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFeed",
    ()=>getFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/legacy.js [app-rsc] (ecmascript)");
;
;
function getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getAtomFeed(feedRoot) {
    var _a;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])("entry", childs).map((item)=>{
            var _a;
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getRssFeed(feedRoot) {
    var _a, _b;
    const childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])("item", feedRoot.children).map((item)=>{
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = [
    "url",
    "type",
    "lang"
];
const MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */ function getMediaElements(where) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])("media:content", where).map((elem)=>{
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"]
        };
        for (const attrib of MEDIA_KEYS_STRING){
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT){
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */ function getOneElement(tagName, node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */ function fetch(tagName, where, recurse = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textContent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */ function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val) obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */ function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}
}),
"[project]/node_modules/domutils/lib/esm/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentPosition",
    ()=>DocumentPosition,
    "compareDocumentPosition",
    ()=>compareDocumentPosition,
    "removeSubsets",
    ()=>removeSubsets,
    "uniqueSort",
    ()=>uniqueSort
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
function removeSubsets(nodes) {
    let idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */ while(--idx >= 0){
        const node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */ if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for(let ancestor = node.parent; ancestor; ancestor = ancestor.parent){
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
var DocumentPosition;
(function(DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(nodeB) ? nodeB : nodeB.parent;
    while(current){
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while(idx < maxIdx && aParents[idx] === bParents[idx]){
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr)=>!arr.includes(node, i + 1));
    nodes.sort((a, b)=>{
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        } else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
}
}),
"[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentPosition"],
    "append",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["append"],
    "appendChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appendChild"],
    "compareDocumentPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compareDocumentPosition"],
    "existsOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["existsOne"],
    "filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"],
    "find",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["find"],
    "findAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findAll"],
    "findOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOne"],
    "findOneChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOneChild"],
    "getAttributeValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAttributeValue"],
    "getChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChildren"],
    "getElementById",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementById"],
    "getElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElements"],
    "getElementsByClassName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByClassName"],
    "getElementsByTagName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"],
    "getElementsByTagType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagType"],
    "getFeed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeed"],
    "getInnerHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInnerHTML"],
    "getName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getName"],
    "getOuterHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOuterHTML"],
    "getParent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParent"],
    "getSiblings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiblings"],
    "getText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getText"],
    "hasAttrib",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAttrib"],
    "hasChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"],
    "innerText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["innerText"],
    "isCDATA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCDATA"],
    "isComment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isComment"],
    "isDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDocument"],
    "isTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"],
    "isText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"],
    "nextElementSibling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextElementSibling"],
    "prepend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prepend"],
    "prependChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prependChild"],
    "prevElementSibling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prevElementSibling"],
    "removeElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeElement"],
    "removeSubsets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeSubsets"],
    "replaceElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceElement"],
    "testElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["testElement"],
    "textContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textContent"],
    "uniqueSort",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueSort"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/traversal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/manipulation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/querying.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/legacy.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/feeds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/traversal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/querying.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/legacy.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/feeds.js [app-rsc] (ecmascript)");
/** @deprecated Use these methods from `domhandler` directly. */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/domutils/lib/esm/legacy.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getElementById",
    ()=>getElementById,
    "getElements",
    ()=>getElements,
    "getElementsByClassName",
    ()=>getElementsByClassName,
    "getElementsByTagName",
    ()=>getElementsByTagName,
    "getElementsByTagType",
    ()=>getElementsByTagType,
    "testElement",
    ()=>testElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/querying.js [app-rsc] (ecmascript)");
;
;
/**
 * A map of functions to check nodes against.
 */ const Checks = {
    tag_name (name) {
        if (typeof name === "function") {
            return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && name(elem.name);
        } else if (name === "*") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"];
        }
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && elem.name === name;
    },
    tag_type (type) {
        if (typeof type === "function") {
            return (elem)=>type(elem.type);
        }
        return (elem)=>elem.type === type;
    },
    tag_contains (data) {
        if (typeof data === "function") {
            return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(elem) && data(elem.data);
        }
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(elem) && elem.data === data;
    }
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */ function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && value(elem.attribs[attrib]);
    }
    return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && elem.attribs[attrib] === value;
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */ function combineFuncs(a, b) {
    return (elem)=>a(elem) || b(elem);
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */ function compileTest(options) {
    const funcs = Object.keys(options).map((key)=>{
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"])(test, nodes, recurse, limit) : [];
}
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOne"])(getAttribCheck("id", id), nodes, recurse);
}
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"])(Checks["tag_name"](tagName), nodes, recurse, limit);
}
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"])(getAttribCheck("class", className), nodes, recurse, limit);
}
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"])(Checks["tag_type"](type), nodes, recurse, limit);
}
}),
"[project]/node_modules/domutils/lib/esm/manipulation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */ __turbopack_context__.s([
    "append",
    ()=>append,
    "appendChild",
    ()=>appendChild,
    "prepend",
    ()=>prepend,
    "prependChild",
    ()=>prependChild,
    "removeElement",
    ()=>removeElement,
    "replaceElement",
    ()=>replaceElement
]);
function removeElement(elem) {
    if (elem.prev) elem.prev.next = elem.next;
    if (elem.next) elem.next.prev = elem.prev;
    if (elem.parent) {
        const childs = elem.parent.children;
        const childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
            childs.splice(childsIndex, 1);
        }
    }
    elem.next = null;
    elem.prev = null;
    elem.parent = null;
}
function replaceElement(elem, replacement) {
    const prev = replacement.prev = elem.prev;
    if (prev) {
        prev.next = replacement;
    }
    const next = replacement.next = elem.next;
    if (next) {
        next.prev = replacement;
    }
    const parent = replacement.parent = elem.parent;
    if (parent) {
        const childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        const sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    } else {
        child.prev = null;
    }
}
function append(elem, next) {
    removeElement(next);
    const { parent } = elem;
    const currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            const childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    } else if (parent) {
        parent.children.push(next);
    }
}
function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) !== 1) {
        const sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    } else {
        child.next = null;
    }
}
function prepend(elem, prev) {
    removeElement(prev);
    const { parent } = elem;
    if (parent) {
        const childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
}),
"[project]/node_modules/domutils/lib/esm/querying.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "existsOne",
    ()=>existsOne,
    "filter",
    ()=>filter,
    "find",
    ()=>find,
    "findAll",
    ()=>findAll,
    "findOne",
    ()=>findOne,
    "findOneChild",
    ()=>findOneChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
function filter(test, node, recurse = true, limit = Infinity) {
    return find(test, Array.isArray(node) ? node : [
        node
    ], recurse, limit);
}
function find(test, nodes, recurse, limit) {
    const result = [];
    /** Stack of the arrays we are looking at. */ const nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    /** Stack of the indices within the arrays. */ const indexStack = [
        0
    ];
    for(;;){
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0) return result;
        }
        if (recurse && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */ indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
function findOneChild(test, nodes) {
    return nodes.find(test);
}
function findOne(test, nodes, recurse = true) {
    const searchedNodes = Array.isArray(nodes) ? nodes : [
        nodes
    ];
    for(let i = 0; i < searchedNodes.length; i++){
        const node = searchedNodes[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(node) && test(node)) {
            return node;
        }
        if (recurse && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) && node.children.length > 0) {
            const found = findOne(test, node.children, true);
            if (found) return found;
        }
    }
    return null;
}
function existsOne(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [
        nodes
    ]).some((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(node) && test(node) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) && existsOne(test, node.children));
}
function findAll(test, nodes) {
    const result = [];
    const nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    const indexStack = [
        0
    ];
    for(;;){
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && test(elem)) result.push(elem);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
}),
"[project]/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInnerHTML",
    ()=>getInnerHTML,
    "getOuterHTML",
    ()=>getOuterHTML,
    "getText",
    ()=>getText,
    "innerText",
    ()=>innerText,
    "textContent",
    ()=>textContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dom-serializer/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
;
;
;
function getOuterHTML(node, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(node, options);
}
function getInnerHTML(node, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) ? node.children.map((node)=>getOuterHTML(node, options)).join("") : "";
}
function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(node)) return node.name === "br" ? "\n" : getText(node.children);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCDATA"])(node)) return getText(node.children);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
function textContent(node) {
    if (Array.isArray(node)) return node.map(textContent).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isComment"])(node)) {
        return textContent(node.children);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) && (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Tag || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCDATA"])(node))) {
        return innerText(node.children);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
}),
"[project]/node_modules/domutils/lib/esm/traversal.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAttributeValue",
    ()=>getAttributeValue,
    "getChildren",
    ()=>getChildren,
    "getName",
    ()=>getName,
    "getParent",
    ()=>getParent,
    "getSiblings",
    ()=>getSiblings,
    "hasAttrib",
    ()=>hasAttrib,
    "nextElementSibling",
    ()=>nextElementSibling,
    "prevElementSibling",
    ()=>prevElementSibling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
function getChildren(elem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(elem) ? elem.children : [];
}
function getParent(elem) {
    return elem.parent || null;
}
function getSiblings(elem) {
    const parent = getParent(elem);
    if (parent != null) return getChildren(parent);
    const siblings = [
        elem
    ];
    let { prev, next } = elem;
    while(prev != null){
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while(next != null){
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
function getName(elem) {
    return elem.name;
}
function nextElementSibling(elem) {
    let { next } = elem;
    while(next !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(next))({ next } = next);
    return next;
}
function prevElementSibling(elem) {
    let { prev } = elem;
    while(prev !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(prev))({ prev } = prev);
    return prev;
}
}),
"[project]/node_modules/encoding-sniffer/dist/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecodeStream",
    ()=>DecodeStream,
    "decodeBuffer",
    ()=>decodeBuffer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/encoding-sniffer/node_modules/iconv-lite/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/encoding-sniffer/dist/esm/sniffer.js [app-rsc] (ecmascript)");
;
;
;
function decodeBuffer(buffer, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].decode(buffer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEncoding"])(buffer, options));
}
class DecodeStream extends __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["Transform"] {
    constructor(options){
        var _a;
        super({
            decodeStrings: false,
            encoding: "utf-8"
        });
        this.buffers = [];
        /** The iconv decode stream. If it is set, we have read more than `options.maxBytes` bytes. */ this.iconv = null;
        this.readBytes = 0;
        this.sniffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sniffer"](options);
        this.maxBytes = (_a = options === null || options === void 0 ? void 0 : options.maxBytes) !== null && _a !== void 0 ? _a : 1024;
    }
    _transform(chunk, _encoding, callback) {
        if (this.readBytes < this.maxBytes) {
            this.sniffer.write(chunk);
            this.readBytes += chunk.length;
            if (this.readBytes < this.maxBytes) {
                this.buffers.push(chunk);
                callback();
                return;
            }
        }
        this.getIconvStream().write(chunk, callback);
    }
    getIconvStream() {
        if (this.iconv) {
            return this.iconv;
        }
        const stream = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$encoding$2d$sniffer$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].decodeStream(this.sniffer.encoding);
        stream.on("data", (chunk)=>this.push(chunk, "utf-8"));
        stream.on("end", ()=>this.push(null));
        this.iconv = stream;
        for (const buffer of this.buffers){
            stream.write(buffer);
        }
        this.buffers.length = 0;
        return stream;
    }
    _flush(callback) {
        this.getIconvStream().end(callback);
    }
}
;
}),
"[project]/node_modules/encoding-sniffer/dist/esm/sniffer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultType",
    ()=>ResultType,
    "STRINGS",
    ()=>STRINGS,
    "Sniffer",
    ()=>Sniffer,
    "getEncoding",
    ()=>getEncoding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$encoding$2f$lib$2f$whatwg$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/whatwg-encoding/lib/whatwg-encoding.js [app-rsc] (ecmascript)");
;
// https://html.spec.whatwg.org/multipage/syntax.html#prescan-a-byte-stream-to-determine-its-encoding
var State;
(function(State) {
    // Before anything starts; can be any of BOM, UTF-16 XML declarations or meta tags
    State[State["Begin"] = 0] = "Begin";
    // Inside of a BOM
    State[State["BOM16BE"] = 1] = "BOM16BE";
    State[State["BOM16LE"] = 2] = "BOM16LE";
    State[State["BOM8"] = 3] = "BOM8";
    // XML prefix
    State[State["UTF16LE_XML_PREFIX"] = 4] = "UTF16LE_XML_PREFIX";
    State[State["BeginLT"] = 5] = "BeginLT";
    State[State["UTF16BE_XML_PREFIX"] = 6] = "UTF16BE_XML_PREFIX";
    // Waiting for opening `<`
    State[State["BeforeTag"] = 7] = "BeforeTag";
    // After the opening `<`
    State[State["BeforeTagName"] = 8] = "BeforeTagName";
    // After `</`
    State[State["BeforeCloseTagName"] = 9] = "BeforeCloseTagName";
    // Beginning of a comment
    State[State["CommentStart"] = 10] = "CommentStart";
    // End of a comment
    State[State["CommentEnd"] = 11] = "CommentEnd";
    // A tag name that could be `meta`
    State[State["TagNameMeta"] = 12] = "TagNameMeta";
    // A tag name that is not `meta`
    State[State["TagNameOther"] = 13] = "TagNameOther";
    // XML declaration
    State[State["XMLDeclaration"] = 14] = "XMLDeclaration";
    State[State["XMLDeclarationBeforeEncoding"] = 15] = "XMLDeclarationBeforeEncoding";
    State[State["XMLDeclarationAfterEncoding"] = 16] = "XMLDeclarationAfterEncoding";
    State[State["XMLDeclarationBeforeValue"] = 17] = "XMLDeclarationBeforeValue";
    State[State["XMLDeclarationValue"] = 18] = "XMLDeclarationValue";
    // Anything that looks like a tag, but doesn't fit in the above categories
    State[State["WeirdTag"] = 19] = "WeirdTag";
    State[State["BeforeAttribute"] = 20] = "BeforeAttribute";
    /*
     * Attributes in meta tag — we compare them to our set here, and back out
     * We care about four attributes: http-equiv, content-type, content, charset
     */ State[State["MetaAttribHttpEquiv"] = 21] = "MetaAttribHttpEquiv";
    // The value has to be `content-type`
    State[State["MetaAttribHttpEquivValue"] = 22] = "MetaAttribHttpEquivValue";
    State[State["MetaAttribC"] = 23] = "MetaAttribC";
    State[State["MetaAttribContent"] = 24] = "MetaAttribContent";
    State[State["MetaAttribCharset"] = 25] = "MetaAttribCharset";
    // Waiting for whitespace
    State[State["MetaAttribAfterName"] = 26] = "MetaAttribAfterName";
    State[State["MetaContentValueQuotedBeforeEncoding"] = 27] = "MetaContentValueQuotedBeforeEncoding";
    State[State["MetaContentValueQuotedAfterEncoding"] = 28] = "MetaContentValueQuotedAfterEncoding";
    State[State["MetaContentValueQuotedBeforeValue"] = 29] = "MetaContentValueQuotedBeforeValue";
    State[State["MetaContentValueQuotedValueQuoted"] = 30] = "MetaContentValueQuotedValueQuoted";
    State[State["MetaContentValueQuotedValueUnquoted"] = 31] = "MetaContentValueQuotedValueUnquoted";
    State[State["MetaContentValueUnquotedBeforeEncoding"] = 32] = "MetaContentValueUnquotedBeforeEncoding";
    State[State["MetaContentValueUnquotedBeforeValue"] = 33] = "MetaContentValueUnquotedBeforeValue";
    State[State["MetaContentValueUnquotedValueQuoted"] = 34] = "MetaContentValueUnquotedValueQuoted";
    State[State["MetaContentValueUnquotedValueUnquoted"] = 35] = "MetaContentValueUnquotedValueUnquoted";
    State[State["AnyAttribName"] = 36] = "AnyAttribName";
    // After the name of an attribute, before the equals sign
    State[State["AfterAttributeName"] = 37] = "AfterAttributeName";
    // After `=`
    State[State["BeforeAttributeValue"] = 38] = "BeforeAttributeValue";
    State[State["AttributeValueQuoted"] = 39] = "AttributeValueQuoted";
    State[State["AttributeValueUnquoted"] = 40] = "AttributeValueUnquoted";
})(State || (State = {}));
var ResultType;
(function(ResultType) {
    // Byte order mark
    ResultType[ResultType["BOM"] = 0] = "BOM";
    // User- or transport layer-defined
    ResultType[ResultType["PASSED"] = 1] = "PASSED";
    // XML prefixes
    ResultType[ResultType["XML_PREFIX"] = 2] = "XML_PREFIX";
    // Meta tag
    ResultType[ResultType["META_TAG"] = 3] = "META_TAG";
    // XML encoding
    ResultType[ResultType["XML_ENCODING"] = 4] = "XML_ENCODING";
    // Default
    ResultType[ResultType["DEFAULT"] = 5] = "DEFAULT";
})(ResultType || (ResultType = {}));
var AttribType;
(function(AttribType) {
    AttribType[AttribType["None"] = 0] = "None";
    AttribType[AttribType["HttpEquiv"] = 1] = "HttpEquiv";
    AttribType[AttribType["Content"] = 2] = "Content";
    AttribType[AttribType["Charset"] = 3] = "Charset";
})(AttribType || (AttribType = {}));
var Chars;
(function(Chars) {
    Chars[Chars["NIL"] = 0] = "NIL";
    Chars[Chars["TAB"] = 9] = "TAB";
    Chars[Chars["LF"] = 10] = "LF";
    Chars[Chars["CR"] = 13] = "CR";
    Chars[Chars["SPACE"] = 32] = "SPACE";
    Chars[Chars["EXCLAMATION"] = 33] = "EXCLAMATION";
    Chars[Chars["DQUOTE"] = 34] = "DQUOTE";
    Chars[Chars["SQUOTE"] = 39] = "SQUOTE";
    Chars[Chars["DASH"] = 45] = "DASH";
    Chars[Chars["SLASH"] = 47] = "SLASH";
    Chars[Chars["SEMICOLON"] = 59] = "SEMICOLON";
    Chars[Chars["LT"] = 60] = "LT";
    Chars[Chars["EQUALS"] = 61] = "EQUALS";
    Chars[Chars["GT"] = 62] = "GT";
    Chars[Chars["QUESTION"] = 63] = "QUESTION";
    Chars[Chars["UpperA"] = 65] = "UpperA";
    Chars[Chars["UpperZ"] = 90] = "UpperZ";
    Chars[Chars["LowerA"] = 97] = "LowerA";
    Chars[Chars["LowerZ"] = 122] = "LowerZ";
})(Chars || (Chars = {}));
const SPACE_CHARACTERS = new Set([
    Chars.SPACE,
    Chars.LF,
    Chars.CR,
    Chars.TAB
]);
const END_OF_UNQUOTED_ATTRIBUTE_VALUE = new Set([
    Chars.SPACE,
    Chars.LF,
    Chars.CR,
    Chars.TAB,
    Chars.GT
]);
function toUint8Array(str) {
    const arr = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++){
        arr[i] = str.charCodeAt(i);
    }
    return arr;
}
const STRINGS = {
    UTF8_BOM: new Uint8Array([
        0xef,
        0xbb,
        0xbf
    ]),
    UTF16LE_BOM: new Uint8Array([
        0xff,
        0xfe
    ]),
    UTF16BE_BOM: new Uint8Array([
        0xfe,
        0xff
    ]),
    UTF16LE_XML_PREFIX: new Uint8Array([
        0x3c,
        0x0,
        0x3f,
        0x0,
        0x78,
        0x0
    ]),
    UTF16BE_XML_PREFIX: new Uint8Array([
        0x0,
        0x3c,
        0x0,
        0x3f,
        0x0,
        0x78
    ]),
    XML_DECLARATION: toUint8Array("<?xml"),
    ENCODING: toUint8Array("encoding"),
    META: toUint8Array("meta"),
    HTTP_EQUIV: toUint8Array("http-equiv"),
    CONTENT: toUint8Array("content"),
    CONTENT_TYPE: toUint8Array("content-type"),
    CHARSET: toUint8Array("charset"),
    COMMENT_START: toUint8Array("<!--"),
    COMMENT_END: toUint8Array("-->")
};
function isAsciiAlpha(c) {
    return c >= Chars.UpperA && c <= Chars.UpperZ || c >= Chars.LowerA && c <= Chars.LowerZ;
}
function isQuote(c) {
    return c === Chars.DQUOTE || c === Chars.SQUOTE;
}
class Sniffer {
    setResult(label, type) {
        if (this.resultType === ResultType.DEFAULT || this.resultType > type) {
            const encoding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$encoding$2f$lib$2f$whatwg$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labelToName"])(label);
            if (encoding) {
                this.encoding = // Check if we are in a meta tag and the encoding is `x-user-defined`
                type === ResultType.META_TAG && encoding === "x-user-defined" ? "windows-1252" : (type === ResultType.META_TAG || type === ResultType.XML_ENCODING) && (encoding === "UTF-16LE" || encoding === "UTF-16BE") ? "UTF-8" : encoding;
                this.resultType = type;
            }
        }
    }
    constructor({ maxBytes = 1024, userEncoding, transportLayerEncodingLabel, defaultEncoding } = {}){
        /** The offset of the previous buffers. */ this.offset = 0;
        this.state = State.Begin;
        this.sectionIndex = 0;
        this.attribType = AttribType.None;
        /**
         * Indicates if the `http-equiv` is `content-type`.
         *
         * Initially `null`, a boolean when a value is found.
         */ this.gotPragma = null;
        this.needsPragma = null;
        this.inMetaTag = false;
        this.encoding = "windows-1252";
        this.resultType = ResultType.DEFAULT;
        this.quoteCharacter = 0;
        this.attributeValue = [];
        this.maxBytes = maxBytes;
        if (userEncoding) {
            this.setResult(userEncoding, ResultType.PASSED);
        }
        if (transportLayerEncodingLabel) {
            this.setResult(transportLayerEncodingLabel, ResultType.PASSED);
        }
        if (defaultEncoding) {
            this.setResult(defaultEncoding, ResultType.DEFAULT);
        }
    }
    stateBegin(c) {
        switch(c){
            case STRINGS.UTF16BE_BOM[0]:
                {
                    this.state = State.BOM16BE;
                    break;
                }
            case STRINGS.UTF16LE_BOM[0]:
                {
                    this.state = State.BOM16LE;
                    break;
                }
            case STRINGS.UTF8_BOM[0]:
                {
                    this.sectionIndex = 1;
                    this.state = State.BOM8;
                    break;
                }
            case Chars.NIL:
                {
                    this.state = State.UTF16BE_XML_PREFIX;
                    this.sectionIndex = 1;
                    break;
                }
            case Chars.LT:
                {
                    this.state = State.BeginLT;
                    break;
                }
            default:
                {
                    this.state = State.BeforeTag;
                }
        }
    }
    stateBeginLT(c) {
        if (c === Chars.NIL) {
            this.state = State.UTF16LE_XML_PREFIX;
            this.sectionIndex = 2;
        } else if (c === Chars.QUESTION) {
            this.state = State.XMLDeclaration;
            this.sectionIndex = 2;
        } else {
            this.state = State.BeforeTagName;
            this.stateBeforeTagName(c);
        }
    }
    stateUTF16BE_XML_PREFIX(c) {
        // Advance position in the section
        if (this.advanceSection(STRINGS.UTF16BE_XML_PREFIX, c)) {
            if (this.sectionIndex === STRINGS.UTF16BE_XML_PREFIX.length) {
                // We have the whole prefix
                this.setResult("utf-16be", ResultType.XML_PREFIX);
            }
        } else {
            this.state = State.BeforeTag;
            this.stateBeforeTag(c);
        }
    }
    stateUTF16LE_XML_PREFIX(c) {
        // Advance position in the section
        if (this.advanceSection(STRINGS.UTF16LE_XML_PREFIX, c)) {
            if (this.sectionIndex === STRINGS.UTF16LE_XML_PREFIX.length) {
                // We have the whole prefix
                this.setResult("utf-16le", ResultType.XML_PREFIX);
            }
        } else {
            this.state = State.BeforeTag;
            this.stateBeforeTag(c);
        }
    }
    stateBOM16LE(c) {
        if (c === STRINGS.UTF16LE_BOM[1]) {
            this.setResult("utf-16le", ResultType.BOM);
        } else {
            this.state = State.BeforeTag;
            this.stateBeforeTag(c);
        }
    }
    stateBOM16BE(c) {
        if (c === STRINGS.UTF16BE_BOM[1]) {
            this.setResult("utf-16be", ResultType.BOM);
        } else {
            this.state = State.BeforeTag;
            this.stateBeforeTag(c);
        }
    }
    stateBOM8(c) {
        if (this.advanceSection(STRINGS.UTF8_BOM, c) && this.sectionIndex === STRINGS.UTF8_BOM.length) {
            this.setResult("utf-8", ResultType.BOM);
        }
    }
    stateBeforeTag(c) {
        if (c === Chars.LT) {
            this.state = State.BeforeTagName;
            this.inMetaTag = false;
        }
    }
    /**
     * We have seen a `<`, and now have to figure out what to do.
     *
     * Options:
     *  - `<meta`
     *  - Any other tag
     *  - A closing tag
     *  - `<!--`
     *  - An XML declaration
     *
     */ stateBeforeTagName(c) {
        if (isAsciiAlpha(c)) {
            if ((c | 0x20) === STRINGS.META[0]) {
                this.sectionIndex = 1;
                this.state = State.TagNameMeta;
            } else {
                this.state = State.TagNameOther;
            }
        } else switch(c){
            case Chars.SLASH:
                {
                    this.state = State.BeforeCloseTagName;
                    break;
                }
            case Chars.EXCLAMATION:
                {
                    this.state = State.CommentStart;
                    this.sectionIndex = 2;
                    break;
                }
            case Chars.QUESTION:
                {
                    this.state = State.WeirdTag;
                    break;
                }
            default:
                {
                    this.state = State.BeforeTag;
                    this.stateBeforeTag(c);
                }
        }
    }
    stateBeforeCloseTagName(c) {
        this.state = isAsciiAlpha(c) ? State.TagNameOther : State.WeirdTag;
    }
    stateCommentStart(c) {
        if (this.advanceSection(STRINGS.COMMENT_START, c)) {
            if (this.sectionIndex === STRINGS.COMMENT_START.length) {
                this.state = State.CommentEnd;
                // The -- of the comment start can be part of the end.
                this.sectionIndex = 2;
            }
        } else {
            this.state = State.WeirdTag;
            this.stateWeirdTag(c);
        }
    }
    stateCommentEnd(c) {
        if (this.advanceSection(STRINGS.COMMENT_END, c)) {
            if (this.sectionIndex === STRINGS.COMMENT_END.length) {
                this.state = State.BeforeTag;
            }
        } else if (c === Chars.DASH) {
            /*
             * If we are here, we know we expected a `>` above.
             * Set this to 2, to support many dashes before the closing `>`.
             */ this.sectionIndex = 2;
        }
    }
    /**
     * Any section starting with `<!`, `<?`, `</`, without being a closing tag or comment.
     */ stateWeirdTag(c) {
        if (c === Chars.GT) {
            this.state = State.BeforeTag;
        }
    }
    /**
     * Advances the section, ignoring upper/lower case.
     *
     * Make sure the section has left-over characters before calling.
     *
     * @returns `false` if we did not match the section.
     */ advanceSectionIC(section, c) {
        return this.advanceSection(section, c | 0x20);
    }
    /**
     * Advances the section.
     *
     * Make sure the section has left-over characters before calling.
     *
     * @returns `false` if we did not match the section.
     */ advanceSection(section, c) {
        if (section[this.sectionIndex] === c) {
            this.sectionIndex++;
            return true;
        }
        this.sectionIndex = 0;
        return false;
    }
    stateTagNameMeta(c) {
        if (this.sectionIndex < STRINGS.META.length) {
            if (this.advanceSectionIC(STRINGS.META, c)) {
                return;
            }
        } else if (SPACE_CHARACTERS.has(c)) {
            this.inMetaTag = true;
            this.gotPragma = null;
            this.needsPragma = null;
            this.state = State.BeforeAttribute;
            return;
        }
        this.state = State.TagNameOther;
        // Reconsume in case there is a `>`.
        this.stateTagNameOther(c);
    }
    stateTagNameOther(c) {
        if (SPACE_CHARACTERS.has(c)) {
            this.state = State.BeforeAttribute;
        } else if (c === Chars.GT) {
            this.state = State.BeforeTag;
        }
    }
    stateBeforeAttribute(c) {
        if (SPACE_CHARACTERS.has(c)) return;
        if (this.inMetaTag) {
            const lower = c | 0x20;
            if (lower === STRINGS.HTTP_EQUIV[0]) {
                this.sectionIndex = 1;
                this.state = State.MetaAttribHttpEquiv;
                return;
            } else if (lower === STRINGS.CHARSET[0]) {
                this.sectionIndex = 1;
                this.state = State.MetaAttribC;
                return;
            }
        }
        this.state = c === Chars.SLASH || c === Chars.GT ? State.BeforeTag : State.AnyAttribName;
    }
    handleMetaAttrib(c, section, type) {
        if (this.advanceSectionIC(section, c)) {
            if (this.sectionIndex === section.length) {
                this.attribType = type;
                this.state = State.MetaAttribAfterName;
            }
        } else {
            this.state = State.AnyAttribName;
            this.stateAnyAttribName(c);
        }
    }
    stateMetaAttribHttpEquiv(c) {
        this.handleMetaAttrib(c, STRINGS.HTTP_EQUIV, AttribType.HttpEquiv);
    }
    stateMetaAttribC(c) {
        const lower = c | 0x20;
        if (lower === STRINGS.CHARSET[1]) {
            this.sectionIndex = 2;
            this.state = State.MetaAttribCharset;
        } else if (lower === STRINGS.CONTENT[1]) {
            this.sectionIndex = 2;
            this.state = State.MetaAttribContent;
        } else {
            this.state = State.AnyAttribName;
            this.stateAnyAttribName(c);
        }
    }
    stateMetaAttribCharset(c) {
        this.handleMetaAttrib(c, STRINGS.CHARSET, AttribType.Charset);
    }
    stateMetaAttribContent(c) {
        this.handleMetaAttrib(c, STRINGS.CONTENT, AttribType.Content);
    }
    stateMetaAttribAfterName(c) {
        if (SPACE_CHARACTERS.has(c) || c === Chars.EQUALS) {
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        } else {
            this.state = State.AnyAttribName;
            this.stateAnyAttribName(c);
        }
    }
    stateAnyAttribName(c) {
        if (SPACE_CHARACTERS.has(c)) {
            this.attribType = AttribType.None;
            this.state = State.AfterAttributeName;
        } else if (c === Chars.SLASH || c === Chars.GT) {
            this.state = State.BeforeTag;
        } else if (c === Chars.EQUALS) {
            this.state = State.BeforeAttributeValue;
        }
    }
    stateAfterAttributeName(c) {
        if (SPACE_CHARACTERS.has(c)) return;
        if (c === Chars.EQUALS) {
            this.state = State.BeforeAttributeValue;
        } else {
            this.state = State.BeforeAttribute;
            this.stateBeforeAttribute(c);
        }
    }
    stateBeforeAttributeValue(c) {
        if (SPACE_CHARACTERS.has(c)) return;
        this.attributeValue.length = 0;
        this.sectionIndex = 0;
        if (isQuote(c)) {
            this.quoteCharacter = c;
            this.state = this.attribType === AttribType.Content ? State.MetaContentValueQuotedBeforeEncoding : this.attribType === AttribType.HttpEquiv ? State.MetaAttribHttpEquivValue : State.AttributeValueQuoted;
        } else if (this.attribType === AttribType.Content) {
            this.state = State.MetaContentValueUnquotedBeforeEncoding;
            this.stateMetaContentValueUnquotedBeforeEncoding(c);
        } else if (this.attribType === AttribType.HttpEquiv) {
            // We use `quoteCharacter = 0` to signify that the value is unquoted.
            this.quoteCharacter = 0;
            this.sectionIndex = 0;
            this.state = State.MetaAttribHttpEquivValue;
            this.stateMetaAttribHttpEquivValue(c);
        } else {
            this.state = State.AttributeValueUnquoted;
            this.stateAttributeValueUnquoted(c);
        }
    }
    // The value has to be `content-type`
    stateMetaAttribHttpEquivValue(c) {
        if (this.sectionIndex === STRINGS.CONTENT_TYPE.length) {
            if (this.quoteCharacter === 0 ? END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c) : c === this.quoteCharacter) {
                if (this.needsPragma !== null) {
                    this.setResult(this.needsPragma, ResultType.META_TAG);
                } else if (this.gotPragma === null) {
                    this.gotPragma = true;
                }
                this.state = State.BeforeAttribute;
                return;
            }
        } else if (this.advanceSectionIC(STRINGS.CONTENT_TYPE, c)) {
            return;
        }
        this.gotPragma = false;
        if (this.quoteCharacter === 0) {
            this.state = State.AttributeValueUnquoted;
            this.stateAttributeValueUnquoted(c);
        } else {
            this.state = State.AttributeValueQuoted;
            this.stateAttributeValueQuoted(c);
        }
    }
    handleMetaContentValue() {
        if (this.attributeValue.length === 0) return;
        const encoding = String.fromCharCode(...this.attributeValue);
        if (this.gotPragma) {
            this.setResult(encoding, ResultType.META_TAG);
        } else if (this.needsPragma === null) {
            // Don't override a previous result.
            this.needsPragma = encoding;
        }
        this.attributeValue.length = 0;
    }
    handleAttributeValue() {
        if (this.attribType === AttribType.Charset) {
            this.setResult(String.fromCharCode(...this.attributeValue), ResultType.META_TAG);
        }
    }
    stateAttributeValueUnquoted(c) {
        if (SPACE_CHARACTERS.has(c)) {
            this.handleAttributeValue();
            this.state = State.BeforeAttribute;
        } else if (c === Chars.SLASH || c === Chars.GT) {
            this.handleAttributeValue();
            this.state = State.BeforeTag;
        } else if (this.attribType === AttribType.Charset) {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    findMetaContentEncoding(c) {
        if (this.advanceSectionIC(STRINGS.CHARSET, c)) {
            if (this.sectionIndex === STRINGS.CHARSET.length) {
                return true;
            }
        } else {
            // If we encountered another `c`, assume we started over.
            this.sectionIndex = Number(c === STRINGS.CHARSET[0]);
        }
        return false;
    }
    stateMetaContentValueUnquotedBeforeEncoding(c) {
        if (END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c)) {
            this.stateAttributeValueUnquoted(c);
        } else if (this.sectionIndex === STRINGS.CHARSET.length) {
            if (c === Chars.EQUALS) {
                this.state = State.MetaContentValueUnquotedBeforeValue;
            }
        } else {
            this.findMetaContentEncoding(c);
        }
    }
    stateMetaContentValueUnquotedBeforeValue(c) {
        if (isQuote(c)) {
            this.quoteCharacter = c;
            this.state = State.MetaContentValueUnquotedValueQuoted;
        } else if (END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c)) {
            // Can't have spaces here, as it would no longer be part of the attribute value.
            this.stateAttributeValueUnquoted(c);
        } else {
            this.state = State.MetaContentValueUnquotedValueUnquoted;
            this.stateMetaContentValueUnquotedValueUnquoted(c);
        }
    }
    stateMetaContentValueUnquotedValueQuoted(c) {
        if (END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c)) {
            // Quotes weren't matched, so we're done.
            this.stateAttributeValueUnquoted(c);
        } else if (c === this.quoteCharacter) {
            this.handleMetaContentValue();
            this.state = State.AttributeValueUnquoted;
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    stateMetaContentValueUnquotedValueUnquoted(c) {
        if (END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c) || c === Chars.SEMICOLON) {
            this.handleMetaContentValue();
            this.state = State.AttributeValueUnquoted;
            this.stateAttributeValueUnquoted(c);
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    stateMetaContentValueQuotedValueUnquoted(c) {
        if (isQuote(c) || SPACE_CHARACTERS.has(c) || c === Chars.SEMICOLON) {
            this.handleMetaContentValue();
            // We are done with the value, but might not be at the end of the attribute
            this.state = State.AttributeValueQuoted;
            this.stateAttributeValueQuoted(c);
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    stateMetaContentValueQuotedValueQuoted(c) {
        if (isQuote(c)) {
            // We have reached the end of our value.
            if (c !== this.quoteCharacter) {
                // Only handle the value if inner quotes were matched.
                this.handleMetaContentValue();
            }
            this.state = State.AttributeValueQuoted;
            this.stateAttributeValueQuoted(c);
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    stateMetaContentValueQuotedBeforeEncoding(c) {
        if (c === this.quoteCharacter) {
            this.stateAttributeValueQuoted(c);
        } else if (this.findMetaContentEncoding(c)) {
            this.state = State.MetaContentValueQuotedAfterEncoding;
        }
    }
    stateMetaContentValueQuotedAfterEncoding(c) {
        if (c === Chars.EQUALS) {
            this.state = State.MetaContentValueQuotedBeforeValue;
        } else if (!SPACE_CHARACTERS.has(c)) {
            // Look for the next encoding
            this.state = State.MetaContentValueQuotedBeforeEncoding;
            this.stateMetaContentValueQuotedBeforeEncoding(c);
        }
    }
    stateMetaContentValueQuotedBeforeValue(c) {
        if (c === this.quoteCharacter) {
            this.stateAttributeValueQuoted(c);
        } else if (isQuote(c)) {
            this.state = State.MetaContentValueQuotedValueQuoted;
        } else if (!SPACE_CHARACTERS.has(c)) {
            this.state = State.MetaContentValueQuotedValueUnquoted;
            this.stateMetaContentValueQuotedValueUnquoted(c);
        }
    }
    stateAttributeValueQuoted(c) {
        if (c === this.quoteCharacter) {
            this.handleAttributeValue();
            this.state = State.BeforeAttribute;
        } else if (this.attribType === AttribType.Charset) {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    // Read STRINGS.XML_DECLARATION
    stateXMLDeclaration(c) {
        if (this.advanceSection(STRINGS.XML_DECLARATION, c)) {
            if (this.sectionIndex === STRINGS.XML_DECLARATION.length) {
                this.sectionIndex = 0;
                this.state = State.XMLDeclarationBeforeEncoding;
            }
        } else {
            this.state = State.WeirdTag;
        }
    }
    stateXMLDeclarationBeforeEncoding(c) {
        if (this.advanceSection(STRINGS.ENCODING, c)) {
            if (this.sectionIndex === STRINGS.ENCODING.length) {
                this.state = State.XMLDeclarationAfterEncoding;
            }
        } else if (c === Chars.GT) {
            this.state = State.BeforeTag;
        } else {
            // If we encountered another `c`, assume we started over.
            this.sectionIndex = Number(c === STRINGS.ENCODING[0]);
        }
    }
    stateXMLDeclarationAfterEncoding(c) {
        if (c === Chars.EQUALS) {
            this.state = State.XMLDeclarationBeforeValue;
        } else if (c > Chars.SPACE) {
            this.state = State.WeirdTag;
            this.stateWeirdTag(c);
        }
    }
    stateXMLDeclarationBeforeValue(c) {
        if (isQuote(c)) {
            this.attributeValue.length = 0;
            this.state = State.XMLDeclarationValue;
        } else if (c > Chars.SPACE) {
            this.state = State.WeirdTag;
            this.stateWeirdTag(c);
        }
    }
    stateXMLDeclarationValue(c) {
        if (isQuote(c)) {
            this.setResult(String.fromCharCode(...this.attributeValue), ResultType.XML_ENCODING);
            this.state = State.WeirdTag;
        } else if (c === Chars.GT) {
            this.state = State.BeforeTag;
        } else if (c <= Chars.SPACE) {
            this.state = State.WeirdTag;
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    write(buffer) {
        let index = 0;
        for(; index < buffer.length && this.offset + index < this.maxBytes; index++){
            const c = buffer[index];
            switch(this.state){
                case State.Begin:
                    {
                        this.stateBegin(c);
                        break;
                    }
                case State.BOM16BE:
                    {
                        this.stateBOM16BE(c);
                        break;
                    }
                case State.BOM16LE:
                    {
                        this.stateBOM16LE(c);
                        break;
                    }
                case State.BOM8:
                    {
                        this.stateBOM8(c);
                        break;
                    }
                case State.UTF16LE_XML_PREFIX:
                    {
                        this.stateUTF16LE_XML_PREFIX(c);
                        break;
                    }
                case State.BeginLT:
                    {
                        this.stateBeginLT(c);
                        break;
                    }
                case State.UTF16BE_XML_PREFIX:
                    {
                        this.stateUTF16BE_XML_PREFIX(c);
                        break;
                    }
                case State.BeforeTag:
                    {
                        // Optimization: Skip all characters until we find a `<`
                        const idx = buffer.indexOf(Chars.LT, index);
                        if (idx === -1) {
                            // We are done with this buffer. Stay in the state and try on the next one.
                            index = buffer.length;
                        } else {
                            index = idx;
                            this.stateBeforeTag(Chars.LT);
                        }
                        break;
                    }
                case State.BeforeTagName:
                    {
                        this.stateBeforeTagName(c);
                        break;
                    }
                case State.BeforeCloseTagName:
                    {
                        this.stateBeforeCloseTagName(c);
                        break;
                    }
                case State.CommentStart:
                    {
                        this.stateCommentStart(c);
                        break;
                    }
                case State.CommentEnd:
                    {
                        this.stateCommentEnd(c);
                        break;
                    }
                case State.TagNameMeta:
                    {
                        this.stateTagNameMeta(c);
                        break;
                    }
                case State.TagNameOther:
                    {
                        this.stateTagNameOther(c);
                        break;
                    }
                case State.XMLDeclaration:
                    {
                        this.stateXMLDeclaration(c);
                        break;
                    }
                case State.XMLDeclarationBeforeEncoding:
                    {
                        this.stateXMLDeclarationBeforeEncoding(c);
                        break;
                    }
                case State.XMLDeclarationAfterEncoding:
                    {
                        this.stateXMLDeclarationAfterEncoding(c);
                        break;
                    }
                case State.XMLDeclarationBeforeValue:
                    {
                        this.stateXMLDeclarationBeforeValue(c);
                        break;
                    }
                case State.XMLDeclarationValue:
                    {
                        this.stateXMLDeclarationValue(c);
                        break;
                    }
                case State.WeirdTag:
                    {
                        this.stateWeirdTag(c);
                        break;
                    }
                case State.BeforeAttribute:
                    {
                        this.stateBeforeAttribute(c);
                        break;
                    }
                case State.MetaAttribHttpEquiv:
                    {
                        this.stateMetaAttribHttpEquiv(c);
                        break;
                    }
                case State.MetaAttribHttpEquivValue:
                    {
                        this.stateMetaAttribHttpEquivValue(c);
                        break;
                    }
                case State.MetaAttribC:
                    {
                        this.stateMetaAttribC(c);
                        break;
                    }
                case State.MetaAttribContent:
                    {
                        this.stateMetaAttribContent(c);
                        break;
                    }
                case State.MetaAttribCharset:
                    {
                        this.stateMetaAttribCharset(c);
                        break;
                    }
                case State.MetaAttribAfterName:
                    {
                        this.stateMetaAttribAfterName(c);
                        break;
                    }
                case State.MetaContentValueQuotedBeforeEncoding:
                    {
                        this.stateMetaContentValueQuotedBeforeEncoding(c);
                        break;
                    }
                case State.MetaContentValueQuotedAfterEncoding:
                    {
                        this.stateMetaContentValueQuotedAfterEncoding(c);
                        break;
                    }
                case State.MetaContentValueQuotedBeforeValue:
                    {
                        this.stateMetaContentValueQuotedBeforeValue(c);
                        break;
                    }
                case State.MetaContentValueQuotedValueQuoted:
                    {
                        this.stateMetaContentValueQuotedValueQuoted(c);
                        break;
                    }
                case State.MetaContentValueQuotedValueUnquoted:
                    {
                        this.stateMetaContentValueQuotedValueUnquoted(c);
                        break;
                    }
                case State.MetaContentValueUnquotedBeforeEncoding:
                    {
                        this.stateMetaContentValueUnquotedBeforeEncoding(c);
                        break;
                    }
                case State.MetaContentValueUnquotedBeforeValue:
                    {
                        this.stateMetaContentValueUnquotedBeforeValue(c);
                        break;
                    }
                case State.MetaContentValueUnquotedValueQuoted:
                    {
                        this.stateMetaContentValueUnquotedValueQuoted(c);
                        break;
                    }
                case State.MetaContentValueUnquotedValueUnquoted:
                    {
                        this.stateMetaContentValueUnquotedValueUnquoted(c);
                        break;
                    }
                case State.AnyAttribName:
                    {
                        this.stateAnyAttribName(c);
                        break;
                    }
                case State.AfterAttributeName:
                    {
                        this.stateAfterAttributeName(c);
                        break;
                    }
                case State.BeforeAttributeValue:
                    {
                        this.stateBeforeAttributeValue(c);
                        break;
                    }
                case State.AttributeValueQuoted:
                    {
                        this.stateAttributeValueQuoted(c);
                        break;
                    }
                case State.AttributeValueUnquoted:
                    {
                        this.stateAttributeValueUnquoted(c);
                        break;
                    }
            }
        }
        this.offset += index;
    }
}
function getEncoding(buffer, options) {
    const sniffer = new Sniffer(options);
    sniffer.write(buffer);
    return sniffer.encoding;
}
}),
"[project]/node_modules/event-target-shim/dist/event-target-shim.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */ Object.defineProperty(exports, '__esModule', {
    value: true
});
/**
 * @typedef {object} PrivateData
 * @property {EventTarget} eventTarget The event target.
 * @property {{type:string}} event The original event object.
 * @property {number} eventPhase The current event phase.
 * @property {EventTarget|null} currentTarget The current event target.
 * @property {boolean} canceled The flag to prevent default.
 * @property {boolean} stopped The flag to stop propagation.
 * @property {boolean} immediateStopped The flag to stop propagation immediately.
 * @property {Function|null} passiveListener The listener if the current listener is passive. Otherwise this is null.
 * @property {number} timeStamp The unix time.
 * @private
 */ /**
 * Private data for event wrappers.
 * @type {WeakMap<Event, PrivateData>}
 * @private
 */ const privateData = new WeakMap();
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */ const wrappers = new WeakMap();
/**
 * Get private data.
 * @param {Event} event The event object to get private data.
 * @returns {PrivateData} The private data of the event.
 * @private
 */ function pd(event) {
    const retv = privateData.get(event);
    console.assert(retv != null, "'this' is expected an Event object, but got", event);
    return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data {PrivateData} private data.
 */ function setCancelFlag(data) {
    if (data.passiveListener != null) {
        if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error("Unable to preventDefault inside passive event listener invocation.", data.passiveListener);
        }
        return;
    }
    if (!data.event.cancelable) {
        return;
    }
    data.canceled = true;
    if (typeof data.event.preventDefault === "function") {
        data.event.preventDefault();
    }
}
/**
 * @see https://dom.spec.whatwg.org/#interface-event
 * @private
 */ /**
 * The event wrapper.
 * @constructor
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Event|{type:string}} event The original event to wrap.
 */ function Event(eventTarget, event) {
    privateData.set(this, {
        eventTarget,
        event,
        eventPhase: 2,
        currentTarget: eventTarget,
        canceled: false,
        stopped: false,
        immediateStopped: false,
        passiveListener: null,
        timeStamp: event.timeStamp || Date.now()
    });
    // https://heycam.github.io/webidl/#Unforgeable
    Object.defineProperty(this, "isTrusted", {
        value: false,
        enumerable: true
    });
    // Define accessors
    const keys = Object.keys(event);
    for(let i = 0; i < keys.length; ++i){
        const key = keys[i];
        if (!(key in this)) {
            Object.defineProperty(this, key, defineRedirectDescriptor(key));
        }
    }
}
// Should be enumerable, but class methods are not enumerable.
Event.prototype = {
    /**
     * The type of this event.
     * @type {string}
     */ get type () {
        return pd(this).event.type;
    },
    /**
     * The target of this event.
     * @type {EventTarget}
     */ get target () {
        return pd(this).eventTarget;
    },
    /**
     * The target of this event.
     * @type {EventTarget}
     */ get currentTarget () {
        return pd(this).currentTarget;
    },
    /**
     * @returns {EventTarget[]} The composed path of this event.
     */ composedPath () {
        const currentTarget = pd(this).currentTarget;
        if (currentTarget == null) {
            return [];
        }
        return [
            currentTarget
        ];
    },
    /**
     * Constant of NONE.
     * @type {number}
     */ get NONE () {
        return 0;
    },
    /**
     * Constant of CAPTURING_PHASE.
     * @type {number}
     */ get CAPTURING_PHASE () {
        return 1;
    },
    /**
     * Constant of AT_TARGET.
     * @type {number}
     */ get AT_TARGET () {
        return 2;
    },
    /**
     * Constant of BUBBLING_PHASE.
     * @type {number}
     */ get BUBBLING_PHASE () {
        return 3;
    },
    /**
     * The target of this event.
     * @type {number}
     */ get eventPhase () {
        return pd(this).eventPhase;
    },
    /**
     * Stop event bubbling.
     * @returns {void}
     */ stopPropagation () {
        const data = pd(this);
        data.stopped = true;
        if (typeof data.event.stopPropagation === "function") {
            data.event.stopPropagation();
        }
    },
    /**
     * Stop event bubbling.
     * @returns {void}
     */ stopImmediatePropagation () {
        const data = pd(this);
        data.stopped = true;
        data.immediateStopped = true;
        if (typeof data.event.stopImmediatePropagation === "function") {
            data.event.stopImmediatePropagation();
        }
    },
    /**
     * The flag to be bubbling.
     * @type {boolean}
     */ get bubbles () {
        return Boolean(pd(this).event.bubbles);
    },
    /**
     * The flag to be cancelable.
     * @type {boolean}
     */ get cancelable () {
        return Boolean(pd(this).event.cancelable);
    },
    /**
     * Cancel this event.
     * @returns {void}
     */ preventDefault () {
        setCancelFlag(pd(this));
    },
    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     */ get defaultPrevented () {
        return pd(this).canceled;
    },
    /**
     * The flag to be composed.
     * @type {boolean}
     */ get composed () {
        return Boolean(pd(this).event.composed);
    },
    /**
     * The unix time of this event.
     * @type {number}
     */ get timeStamp () {
        return pd(this).timeStamp;
    },
    /**
     * The target of this event.
     * @type {EventTarget}
     * @deprecated
     */ get srcElement () {
        return pd(this).eventTarget;
    },
    /**
     * The flag to stop event bubbling.
     * @type {boolean}
     * @deprecated
     */ get cancelBubble () {
        return pd(this).stopped;
    },
    set cancelBubble (value){
        if (!value) {
            return;
        }
        const data = pd(this);
        data.stopped = true;
        if (typeof data.event.cancelBubble === "boolean") {
            data.event.cancelBubble = true;
        }
    },
    /**
     * The flag to indicate cancellation state.
     * @type {boolean}
     * @deprecated
     */ get returnValue () {
        return !pd(this).canceled;
    },
    set returnValue (value){
        if (!value) {
            setCancelFlag(pd(this));
        }
    },
    /**
     * Initialize this event object. But do nothing under event dispatching.
     * @param {string} type The event type.
     * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
     * @param {boolean} [cancelable=false] The flag to be possible to cancel.
     * @deprecated
     */ initEvent () {
    // Do nothing.
    }
};
// `constructor` is not enumerable.
Object.defineProperty(Event.prototype, "constructor", {
    value: Event,
    configurable: true,
    writable: true
});
// Ensure `event instanceof window.Event` is `true`.
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
/**
 * Get the property descriptor to redirect a given property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to redirect the property.
 * @private
 */ function defineRedirectDescriptor(key) {
    return {
        get () {
            return pd(this).event[key];
        },
        set (value) {
            pd(this).event[key] = value;
        },
        configurable: true,
        enumerable: true
    };
}
/**
 * Get the property descriptor to call a given method property.
 * @param {string} key Property name to define property descriptor.
 * @returns {PropertyDescriptor} The property descriptor to call the method property.
 * @private
 */ function defineCallDescriptor(key) {
    return {
        value () {
            const event = pd(this).event;
            return event[key].apply(event, arguments);
        },
        configurable: true,
        enumerable: true
    };
}
/**
 * Define new wrapper class.
 * @param {Function} BaseEvent The base wrapper class.
 * @param {Object} proto The prototype of the original event.
 * @returns {Function} The defined wrapper class.
 * @private
 */ function defineWrapper(BaseEvent, proto) {
    const keys = Object.keys(proto);
    if (keys.length === 0) {
        return BaseEvent;
    }
    /** CustomEvent */ function CustomEvent(eventTarget, event) {
        BaseEvent.call(this, eventTarget, event);
    }
    CustomEvent.prototype = Object.create(BaseEvent.prototype, {
        constructor: {
            value: CustomEvent,
            configurable: true,
            writable: true
        }
    });
    // Define accessors.
    for(let i = 0; i < keys.length; ++i){
        const key = keys[i];
        if (!(key in BaseEvent.prototype)) {
            const descriptor = Object.getOwnPropertyDescriptor(proto, key);
            const isFunc = typeof descriptor.value === "function";
            Object.defineProperty(CustomEvent.prototype, key, isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key));
        }
    }
    return CustomEvent;
}
/**
 * Get the wrapper class of a given prototype.
 * @param {Object} proto The prototype of the original event to get its wrapper.
 * @returns {Function} The wrapper class.
 * @private
 */ function getWrapper(proto) {
    if (proto == null || proto === Object.prototype) {
        return Event;
    }
    let wrapper = wrappers.get(proto);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
        wrappers.set(proto, wrapper);
    }
    return wrapper;
}
/**
 * Wrap a given event to management a dispatching.
 * @param {EventTarget} eventTarget The event target of this dispatching.
 * @param {Object} event The event to wrap.
 * @returns {Event} The wrapper instance.
 * @private
 */ function wrapEvent(eventTarget, event) {
    const Wrapper = getWrapper(Object.getPrototypeOf(event));
    return new Wrapper(eventTarget, event);
}
/**
 * Get the immediateStopped flag of a given event.
 * @param {Event} event The event to get.
 * @returns {boolean} The flag to stop propagation immediately.
 * @private
 */ function isStopped(event) {
    return pd(event).immediateStopped;
}
/**
 * Set the current event phase of a given event.
 * @param {Event} event The event to set current target.
 * @param {number} eventPhase New event phase.
 * @returns {void}
 * @private
 */ function setEventPhase(event, eventPhase) {
    pd(event).eventPhase = eventPhase;
}
/**
 * Set the current target of a given event.
 * @param {Event} event The event to set current target.
 * @param {EventTarget|null} currentTarget New current target.
 * @returns {void}
 * @private
 */ function setCurrentTarget(event, currentTarget) {
    pd(event).currentTarget = currentTarget;
}
/**
 * Set a passive listener of a given event.
 * @param {Event} event The event to set current target.
 * @param {Function|null} passiveListener New passive listener.
 * @returns {void}
 * @private
 */ function setPassiveListener(event, passiveListener) {
    pd(event).passiveListener = passiveListener;
}
/**
 * @typedef {object} ListenerNode
 * @property {Function} listener
 * @property {1|2|3} listenerType
 * @property {boolean} passive
 * @property {boolean} once
 * @property {ListenerNode|null} next
 * @private
 */ /**
 * @type {WeakMap<object, Map<string, ListenerNode>>}
 * @private
 */ const listenersMap = new WeakMap();
// Listener types
const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;
/**
 * Check whether a given value is an object or not.
 * @param {any} x The value to check.
 * @returns {boolean} `true` if the value is an object.
 */ function isObject(x) {
    return x !== null && typeof x === "object" //eslint-disable-line no-restricted-syntax
    ;
}
/**
 * Get listeners.
 * @param {EventTarget} eventTarget The event target to get.
 * @returns {Map<string, ListenerNode>} The listeners.
 * @private
 */ function getListeners(eventTarget) {
    const listeners = listenersMap.get(eventTarget);
    if (listeners == null) {
        throw new TypeError("'this' is expected an EventTarget object, but got another value.");
    }
    return listeners;
}
/**
 * Get the property descriptor for the event attribute of a given event.
 * @param {string} eventName The event name to get property descriptor.
 * @returns {PropertyDescriptor} The property descriptor.
 * @private
 */ function defineEventAttributeDescriptor(eventName) {
    return {
        get () {
            const listeners = getListeners(this);
            let node = listeners.get(eventName);
            while(node != null){
                if (node.listenerType === ATTRIBUTE) {
                    return node.listener;
                }
                node = node.next;
            }
            return null;
        },
        set (listener) {
            if (typeof listener !== "function" && !isObject(listener)) {
                listener = null; // eslint-disable-line no-param-reassign
            }
            const listeners = getListeners(this);
            // Traverse to the tail while removing old value.
            let prev = null;
            let node = listeners.get(eventName);
            while(node != null){
                if (node.listenerType === ATTRIBUTE) {
                    // Remove old value.
                    if (prev !== null) {
                        prev.next = node.next;
                    } else if (node.next !== null) {
                        listeners.set(eventName, node.next);
                    } else {
                        listeners.delete(eventName);
                    }
                } else {
                    prev = node;
                }
                node = node.next;
            }
            // Add new value.
            if (listener !== null) {
                const newNode = {
                    listener,
                    listenerType: ATTRIBUTE,
                    passive: false,
                    once: false,
                    next: null
                };
                if (prev === null) {
                    listeners.set(eventName, newNode);
                } else {
                    prev.next = newNode;
                }
            }
        },
        configurable: true,
        enumerable: true
    };
}
/**
 * Define an event attribute (e.g. `eventTarget.onclick`).
 * @param {Object} eventTargetPrototype The event target prototype to define an event attrbite.
 * @param {string} eventName The event name to define.
 * @returns {void}
 */ function defineEventAttribute(eventTargetPrototype, eventName) {
    Object.defineProperty(eventTargetPrototype, `on${eventName}`, defineEventAttributeDescriptor(eventName));
}
/**
 * Define a custom EventTarget with event attributes.
 * @param {string[]} eventNames Event names for event attributes.
 * @returns {EventTarget} The custom EventTarget.
 * @private
 */ function defineCustomEventTarget(eventNames) {
    /** CustomEventTarget */ function CustomEventTarget() {
        EventTarget.call(this);
    }
    CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
        constructor: {
            value: CustomEventTarget,
            configurable: true,
            writable: true
        }
    });
    for(let i = 0; i < eventNames.length; ++i){
        defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
    }
    return CustomEventTarget;
}
/**
 * EventTarget.
 *
 * - This is constructor if no arguments.
 * - This is a function which returns a CustomEventTarget constructor if there are arguments.
 *
 * For example:
 *
 *     class A extends EventTarget {}
 *     class B extends EventTarget("message") {}
 *     class C extends EventTarget("message", "error") {}
 *     class D extends EventTarget(["message", "error"]) {}
 */ function EventTarget() {
    /*eslint-disable consistent-return */ if (this instanceof EventTarget) {
        listenersMap.set(this, new Map());
        return;
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
        return defineCustomEventTarget(arguments[0]);
    }
    if (arguments.length > 0) {
        const types = new Array(arguments.length);
        for(let i = 0; i < arguments.length; ++i){
            types[i] = arguments[i];
        }
        return defineCustomEventTarget(types);
    }
    throw new TypeError("Cannot call a class as a function");
/*eslint-enable consistent-return */ }
// Should be enumerable, but class methods are not enumerable.
EventTarget.prototype = {
    /**
     * Add a given listener to this event target.
     * @param {string} eventName The event name to add.
     * @param {Function} listener The listener to add.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */ addEventListener (eventName, listener, options) {
        if (listener == null) {
            return;
        }
        if (typeof listener !== "function" && !isObject(listener)) {
            throw new TypeError("'listener' should be a function or an object.");
        }
        const listeners = getListeners(this);
        const optionsIsObj = isObject(options);
        const capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        const newNode = {
            listener,
            listenerType,
            passive: optionsIsObj && Boolean(options.passive),
            once: optionsIsObj && Boolean(options.once),
            next: null
        };
        // Set it as the first node if the first node is null.
        let node = listeners.get(eventName);
        if (node === undefined) {
            listeners.set(eventName, newNode);
            return;
        }
        // Traverse to the tail while checking duplication..
        let prev = null;
        while(node != null){
            if (node.listener === listener && node.listenerType === listenerType) {
                // Should ignore duplication.
                return;
            }
            prev = node;
            node = node.next;
        }
        // Add it.
        prev.next = newNode;
    },
    /**
     * Remove a given listener from this event target.
     * @param {string} eventName The event name to remove.
     * @param {Function} listener The listener to remove.
     * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
     * @returns {void}
     */ removeEventListener (eventName, listener, options) {
        if (listener == null) {
            return;
        }
        const listeners = getListeners(this);
        const capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
        const listenerType = capture ? CAPTURE : BUBBLE;
        let prev = null;
        let node = listeners.get(eventName);
        while(node != null){
            if (node.listener === listener && node.listenerType === listenerType) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
                return;
            }
            prev = node;
            node = node.next;
        }
    },
    /**
     * Dispatch a given event.
     * @param {Event|{type:string}} event The event to dispatch.
     * @returns {boolean} `false` if canceled.
     */ dispatchEvent (event) {
        if (event == null || typeof event.type !== "string") {
            throw new TypeError('"event.type" should be a string.');
        }
        // If listeners aren't registered, terminate.
        const listeners = getListeners(this);
        const eventName = event.type;
        let node = listeners.get(eventName);
        if (node == null) {
            return true;
        }
        // Since we cannot rewrite several properties, so wrap object.
        const wrappedEvent = wrapEvent(this, event);
        // This doesn't process capturing phase and bubbling phase.
        // This isn't participating in a tree.
        let prev = null;
        while(node != null){
            // Remove this listener if it's once
            if (node.once) {
                if (prev !== null) {
                    prev.next = node.next;
                } else if (node.next !== null) {
                    listeners.set(eventName, node.next);
                } else {
                    listeners.delete(eventName);
                }
            } else {
                prev = node;
            }
            // Call this listener
            setPassiveListener(wrappedEvent, node.passive ? node.listener : null);
            if (typeof node.listener === "function") {
                try {
                    node.listener.call(this, wrappedEvent);
                } catch (err) {
                    if (typeof console !== "undefined" && typeof console.error === "function") {
                        console.error(err);
                    }
                }
            } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
                node.listener.handleEvent(wrappedEvent);
            }
            // Break if `event.stopImmediatePropagation` was called.
            if (isStopped(wrappedEvent)) {
                break;
            }
            node = node.next;
        }
        setPassiveListener(wrappedEvent, null);
        setEventPhase(wrappedEvent, 0);
        setCurrentTarget(wrappedEvent, null);
        return !wrappedEvent.defaultPrevented;
    }
};
// `constructor` is not enumerable.
Object.defineProperty(EventTarget.prototype, "constructor", {
    value: EventTarget,
    configurable: true,
    writable: true
});
// Ensure `eventTarget instanceof window.EventTarget` is `true`.
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
exports.defineEventAttribute = defineEventAttribute;
exports.EventTarget = EventTarget;
exports.default = EventTarget;
module.exports = EventTarget;
module.exports.EventTarget = module.exports["default"] = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;
}),
"[project]/node_modules/htmlparser2/dist/esm/Parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Parser",
    ()=>Parser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/node_modules/entities/dist/esm/decode.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/node_modules/entities/dist/esm/decode-codepoint.js [app-rsc] (ecmascript)");
;
;
const formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
]);
const pTag = new Set([
    "p"
]);
const tableSectionTags = new Set([
    "thead",
    "tbody"
]);
const ddtTags = new Set([
    "dd",
    "dt"
]);
const rtpTags = new Set([
    "rt",
    "rp"
]);
const openImpliesClose = new Map([
    [
        "tr",
        new Set([
            "tr",
            "th",
            "td"
        ])
    ],
    [
        "th",
        new Set([
            "th"
        ])
    ],
    [
        "td",
        new Set([
            "thead",
            "th",
            "td"
        ])
    ],
    [
        "body",
        new Set([
            "head",
            "link",
            "script"
        ])
    ],
    [
        "li",
        new Set([
            "li"
        ])
    ],
    [
        "p",
        pTag
    ],
    [
        "h1",
        pTag
    ],
    [
        "h2",
        pTag
    ],
    [
        "h3",
        pTag
    ],
    [
        "h4",
        pTag
    ],
    [
        "h5",
        pTag
    ],
    [
        "h6",
        pTag
    ],
    [
        "select",
        formTags
    ],
    [
        "input",
        formTags
    ],
    [
        "output",
        formTags
    ],
    [
        "button",
        formTags
    ],
    [
        "datalist",
        formTags
    ],
    [
        "textarea",
        formTags
    ],
    [
        "option",
        new Set([
            "option"
        ])
    ],
    [
        "optgroup",
        new Set([
            "optgroup",
            "option"
        ])
    ],
    [
        "dd",
        ddtTags
    ],
    [
        "dt",
        ddtTags
    ],
    [
        "address",
        pTag
    ],
    [
        "article",
        pTag
    ],
    [
        "aside",
        pTag
    ],
    [
        "blockquote",
        pTag
    ],
    [
        "details",
        pTag
    ],
    [
        "div",
        pTag
    ],
    [
        "dl",
        pTag
    ],
    [
        "fieldset",
        pTag
    ],
    [
        "figcaption",
        pTag
    ],
    [
        "figure",
        pTag
    ],
    [
        "footer",
        pTag
    ],
    [
        "form",
        pTag
    ],
    [
        "header",
        pTag
    ],
    [
        "hr",
        pTag
    ],
    [
        "main",
        pTag
    ],
    [
        "nav",
        pTag
    ],
    [
        "ol",
        pTag
    ],
    [
        "pre",
        pTag
    ],
    [
        "section",
        pTag
    ],
    [
        "table",
        pTag
    ],
    [
        "ul",
        pTag
    ],
    [
        "rt",
        rtpTags
    ],
    [
        "rp",
        rtpTags
    ],
    [
        "tbody",
        tableSectionTags
    ],
    [
        "tfoot",
        tableSectionTags
    ]
]);
const voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
const foreignContextElements = new Set([
    "math",
    "svg"
]);
const htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title"
]);
const reNameEnd = /\s|\//;
class Parser {
    constructor(cbs, options = {}){
        var _a, _b, _c, _d, _e, _f;
        this.options = options;
        /** The start index of the last event. */ this.startIndex = 0;
        /** The end index of the last event. */ this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */ this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */ this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */ this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.htmlMode = !this.options.xmlMode;
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : this.htmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : this.htmlMode;
        this.recognizeSelfClosing = (_c = options.recognizeSelfClosing) !== null && _c !== void 0 ? _c : !this.htmlMode;
        this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== void 0 ? _d : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(this.options, this);
        this.foreignContext = [
            !this.htmlMode
        ];
        (_f = (_e = this.cbs).onparserinit) === null || _f === void 0 ? void 0 : _f.call(_e, this);
    }
    // Tokenizer event handlers
    /** @internal */ ontext(start, endIndex) {
        var _a, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    }
    /** @internal */ ontextentity(cp, endIndex) {
        var _a, _b;
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromCodePoint"])(cp));
        this.startIndex = endIndex;
    }
    /**
     * Checks if the current tag is a void element. Override this if you want
     * to specify your own additional void elements.
     */ isVoidElement(name) {
        return this.htmlMode && voidElements.has(name);
    }
    /** @internal */ onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    }
    emitOpenTag(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        const impliesClose = this.htmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while(this.stack.length > 0 && impliesClose.has(this.stack[0])){
                const element = this.stack.shift();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.unshift(name);
            if (this.htmlMode) {
                if (foreignContextElements.has(name)) {
                    this.foreignContext.unshift(true);
                } else if (htmlIntegrationElements.has(name)) {
                    this.foreignContext.unshift(false);
                }
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag) this.attribs = {};
    }
    endOpenTag(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /** @internal */ onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onclosetag(start, endIndex) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (this.htmlMode && (foreignContextElements.has(name) || htmlIntegrationElements.has(name))) {
            this.foreignContext.shift();
        }
        if (!this.isVoidElement(name)) {
            const pos = this.stack.indexOf(name);
            if (pos !== -1) {
                for(let index = 0; index <= pos; index++){
                    const element = this.stack.shift();
                    // We know the stack has sufficient elements.
                    (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, index !== pos);
                }
            } else if (this.htmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        } else if (this.htmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, "br");
            (_f = (_e = this.cbs).onopentag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", {}, true);
            (_h = (_g = this.cbs).onclosetag) === null || _h === void 0 ? void 0 : _h.call(_g, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.recognizeSelfClosing || this.foreignContext[0]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        } else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    }
    closeCurrentTag(isOpenImplied) {
        var _a, _b;
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[0] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.shift();
        }
    }
    /** @internal */ onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
    }
    /** @internal */ onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */ onattribentity(cp) {
        this.attribvalue += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromCodePoint"])(cp);
    }
    /** @internal */ onattribend(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuoteType"].Double ? '"' : quote === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuoteType"].Single ? "'" : quote === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuoteType"].NoValue ? undefined : null);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /** @internal */ ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ oncomment(start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ oncdata(start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (!this.htmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        } else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onend() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for(let index = 0; index < this.stack.length; index++){
                this.cbs.onclosetag(this.stack[index], true);
            }
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */ reset() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.foreignContext.length = 0;
        this.foreignContext.unshift(!this.htmlMode);
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */ parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        while(start - this.bufferOffset >= this.buffers[0].length){
            this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while(end - this.bufferOffset > this.buffers[0].length){
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */ write(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */ end(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
            return;
        }
        if (chunk) this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */ pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */ resume() {
        this.tokenizer.resume();
        while(this.tokenizer.running && this.writeIndex < this.buffers.length){
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended) this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */ parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */ done(chunk) {
        this.end(chunk);
    }
}
}),
"[project]/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteType",
    ()=>QuoteType,
    "default",
    ()=>Tokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/node_modules/entities/dist/esm/decode.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/node_modules/entities/dist/esm/generated/decode-data-html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/node_modules/entities/dist/esm/generated/decode-data-xml.js [app-rsc] (ecmascript)");
;
var CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes[CharCodes["Number"] = 35] = "Number";
    CharCodes[CharCodes["Amp"] = 38] = "Amp";
    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Slash"] = 47] = "Slash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["Semi"] = 59] = "Semi";
    CharCodes[CharCodes["Lt"] = 60] = "Lt";
    CharCodes[CharCodes["Eq"] = 61] = "Eq";
    CharCodes[CharCodes["Gt"] = 62] = "Gt";
    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
/** All the states the tokenizer can be in. */ var State;
(function(State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments & CDATA
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["CDATASequence"] = 19] = "CDATASequence";
    State[State["InSpecialComment"] = 20] = "InSpecialComment";
    State[State["InCommentLike"] = 21] = "InCommentLike";
    // Special tags
    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State[State["BeforeSpecialT"] = 23] = "BeforeSpecialT";
    State[State["SpecialStartSequence"] = 24] = "SpecialStartSequence";
    State[State["InSpecialTag"] = 25] = "InSpecialTag";
    State[State["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace(c) {
    return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c) {
    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
}
function isASCIIAlpha(c) {
    return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
}
var QuoteType;
(function(QuoteType) {
    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
    QuoteType[QuoteType["Single"] = 2] = "Single";
    QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */ const Sequences = {
    Cdata: new Uint8Array([
        0x43,
        0x44,
        0x41,
        0x54,
        0x41,
        0x5b
    ]),
    CdataEnd: new Uint8Array([
        0x5d,
        0x5d,
        0x3e
    ]),
    CommentEnd: new Uint8Array([
        0x2d,
        0x2d,
        0x3e
    ]),
    ScriptEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x73,
        0x63,
        0x72,
        0x69,
        0x70,
        0x74
    ]),
    StyleEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x73,
        0x74,
        0x79,
        0x6c,
        0x65
    ]),
    TitleEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x74,
        0x69,
        0x74,
        0x6c,
        0x65
    ]),
    TextareaEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x74,
        0x65,
        0x78,
        0x74,
        0x61,
        0x72,
        0x65,
        0x61
    ]),
    XmpEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x78,
        0x6d,
        0x70
    ])
};
class Tokenizer {
    constructor({ xmlMode = false, decodeEntities = true }, cbs){
        this.cbs = cbs;
        /** The current state the tokenizer is in. */ this.state = State.Text;
        /** The read buffer. */ this.buffer = "";
        /** The beginning of the section that is currently being read. */ this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */ this.index = 0;
        /** The start of the last entity. */ this.entityStart = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ this.baseState = State.Text;
        /** For special parsing behavior inside of script and style tags. */ this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */ this.running = true;
        /** The offset of the current buffer. */ this.offset = 0;
        this.currentSequence = undefined;
        this.sequenceIndex = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityDecoder"](xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["xmlDecodeTree"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["htmlDecodeTree"], (cp, consumed)=>this.emitCodePoint(cp, consumed));
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = undefined;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running) this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    stateText(c) {
        if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd ? isEndOfTagSection(c) : (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
            this.isSpecial = false;
        } else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */ stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === CharCodes.Gt || isWhitespace(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        } else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                // We have to parse entities in <title> tags.
                if (this.decodeEntities && c === CharCodes.Amp) {
                    this.startEntity();
                }
            } else if (this.fastForwardTo(CharCodes.Lt)) {
                // Outside of <title> tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        } else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === CharCodes.Lt);
        }
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        } else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c); // Reconsume the character
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */ fastForwardTo(c) {
        while(++this.index < this.buffer.length + this.offset){
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */ this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */ stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                } else {
                    this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        } else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */ isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
        if (c === CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
        } else if (this.isTagStartChar(c)) {
            const lower = c | 0x20;
            this.sectionStart = this.index;
            if (this.xmlMode) {
                this.state = State.InTagName;
            } else if (lower === Sequences.ScriptEnd[2]) {
                this.state = State.BeforeSpecialS;
            } else if (lower === Sequences.TitleEnd[2] || lower === Sequences.XmpEnd[2]) {
                this.state = State.BeforeSpecialT;
            } else {
                this.state = State.InTagName;
            }
        } else if (c === CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        } else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace(c)) {
        // Ignore
        } else if (c === CharCodes.Gt) {
            this.state = State.Text;
        } else {
            this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === CharCodes.Gt || isWhitespace(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
            } else {
                this.state = State.Text;
            }
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        } else if (!isWhitespace(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        } else if (!isWhitespace(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = this.index;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        } else if (c === CharCodes.Slash || c === CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        } else if (!isWhitespace(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        } else if (!isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
            this.state = State.BeforeAttributeName;
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace(c) || c === CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateBeforeDeclaration(c) {
        if (c === CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        } else {
            this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
        }
    }
    stateInDeclaration(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        } else {
            this.state = State.InDeclaration;
        }
    }
    stateInSpecialComment(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        } else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        } else {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
        }
    }
    stateBeforeSpecialT(c) {
        const lower = c | 0x20;
        switch(lower){
            case Sequences.TitleEnd[3]:
                {
                    this.startSpecial(Sequences.TitleEnd, 4);
                    break;
                }
            case Sequences.TextareaEnd[3]:
                {
                    this.startSpecial(Sequences.TextareaEnd, 4);
                    break;
                }
            case Sequences.XmpEnd[3]:
                {
                    this.startSpecial(Sequences.XmpEnd, 4);
                    break;
                }
            default:
                {
                    this.state = State.InTagName;
                    this.stateInTagName(c); // Consume the token again
                }
        }
    }
    startEntity() {
        this.baseState = this.state;
        this.state = State.InEntity;
        this.entityStart = this.index;
        this.entityDecoder.startEntity(this.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Legacy : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Attribute);
    }
    stateInEntity() {
        const indexInBuffer = this.index - this.offset;
        const length = this.entityDecoder.write(this.buffer, indexInBuffer);
        // If `length` is positive, we are done with the entity.
        if (length >= 0) {
            this.state = this.baseState;
            if (length === 0) {
                this.index -= 1;
            }
        } else {
            if (indexInBuffer < this.buffer.length && this.buffer.charCodeAt(indexInBuffer) === CharCodes.Amp) {
                this.state = this.baseState;
                this.index -= 1;
                return;
            }
            // Mark buffer as consumed.
            this.index = this.offset + this.buffer.length - 1;
        }
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */ cleanup() {
        // If we are inside of text or attributes, emit what we already have.
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */ parse() {
        while(this.shouldContinue()){
            const c = this.buffer.charCodeAt(this.index - this.offset);
            switch(this.state){
                case State.Text:
                    {
                        this.stateText(c);
                        break;
                    }
                case State.SpecialStartSequence:
                    {
                        this.stateSpecialStartSequence(c);
                        break;
                    }
                case State.InSpecialTag:
                    {
                        this.stateInSpecialTag(c);
                        break;
                    }
                case State.CDATASequence:
                    {
                        this.stateCDATASequence(c);
                        break;
                    }
                case State.InAttributeValueDq:
                    {
                        this.stateInAttributeValueDoubleQuotes(c);
                        break;
                    }
                case State.InAttributeName:
                    {
                        this.stateInAttributeName(c);
                        break;
                    }
                case State.InCommentLike:
                    {
                        this.stateInCommentLike(c);
                        break;
                    }
                case State.InSpecialComment:
                    {
                        this.stateInSpecialComment(c);
                        break;
                    }
                case State.BeforeAttributeName:
                    {
                        this.stateBeforeAttributeName(c);
                        break;
                    }
                case State.InTagName:
                    {
                        this.stateInTagName(c);
                        break;
                    }
                case State.InClosingTagName:
                    {
                        this.stateInClosingTagName(c);
                        break;
                    }
                case State.BeforeTagName:
                    {
                        this.stateBeforeTagName(c);
                        break;
                    }
                case State.AfterAttributeName:
                    {
                        this.stateAfterAttributeName(c);
                        break;
                    }
                case State.InAttributeValueSq:
                    {
                        this.stateInAttributeValueSingleQuotes(c);
                        break;
                    }
                case State.BeforeAttributeValue:
                    {
                        this.stateBeforeAttributeValue(c);
                        break;
                    }
                case State.BeforeClosingTagName:
                    {
                        this.stateBeforeClosingTagName(c);
                        break;
                    }
                case State.AfterClosingTagName:
                    {
                        this.stateAfterClosingTagName(c);
                        break;
                    }
                case State.BeforeSpecialS:
                    {
                        this.stateBeforeSpecialS(c);
                        break;
                    }
                case State.BeforeSpecialT:
                    {
                        this.stateBeforeSpecialT(c);
                        break;
                    }
                case State.InAttributeValueNq:
                    {
                        this.stateInAttributeValueNoQuotes(c);
                        break;
                    }
                case State.InSelfClosingTag:
                    {
                        this.stateInSelfClosingTag(c);
                        break;
                    }
                case State.InDeclaration:
                    {
                        this.stateInDeclaration(c);
                        break;
                    }
                case State.BeforeDeclaration:
                    {
                        this.stateBeforeDeclaration(c);
                        break;
                    }
                case State.BeforeComment:
                    {
                        this.stateBeforeComment(c);
                        break;
                    }
                case State.InProcessingInstruction:
                    {
                        this.stateInProcessingInstruction(c);
                        break;
                    }
                case State.InEntity:
                    {
                        this.stateInEntity();
                        break;
                    }
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InEntity) {
            this.entityDecoder.end();
            this.state = this.baseState;
        }
        this.handleTrailingData();
        this.cbs.onend();
    }
    /** Handle any trailing data. */ handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        // If there is no remaining data, we are done.
        if (this.sectionStart >= endIndex) {
            return;
        }
        if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
            } else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
        } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
        /*
             * If we are currently in an opening or closing tag, us not calling the
             * respective callback signals that the tag should be ignored.
             */ } else {
            this.cbs.ontext(this.sectionStart, endIndex);
        }
    }
    emitCodePoint(cp, consumed) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
            if (this.sectionStart < this.entityStart) {
                this.cbs.onattribdata(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.onattribentity(cp);
        } else {
            if (this.sectionStart < this.entityStart) {
                this.cbs.ontext(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.ontextentity(cp, this.sectionStart);
        }
    }
}
}),
"[project]/node_modules/htmlparser2/dist/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDocumentStream",
    ()=>createDocumentStream,
    "createDomStream",
    ()=>createDomStream,
    "parseDOM",
    ()=>parseDOM,
    "parseDocument",
    ()=>parseDocument,
    "parseFeed",
    ()=>parseFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/esm/Parser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-rsc] (ecmascript)");
/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domutils/lib/esm/feeds.js [app-rsc] (ecmascript)");
;
;
;
;
function parseDocument(data, options) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"](undefined, options);
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"](handler, options).end(data);
    return handler.root;
}
function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
function createDocumentStream(callback, options, elementCallback) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"]((error)=>callback(error, handler.root), options, elementCallback);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"](handler, options);
}
function createDomStream(callback, options, elementCallback) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"](callback, options, elementCallback);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"](handler, options);
}
;
;
;
;
const parseFeedDefaultOptions = {
    xmlMode: true
};
function parseFeed(feed, options = parseFeedDefaultOptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeed"])(parseDOM(feed, options));
}
;
}),
"[project]/node_modules/node-fetch/lib/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbortError",
    ()=>AbortError,
    "FetchError",
    ()=>FetchError,
    "Headers",
    ()=>Headers,
    "Request",
    ()=>Request,
    "Response",
    ()=>Response,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/stream [external] (stream, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/zlib [external] (zlib, cjs)");
;
;
;
;
;
;
// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
// fix for "Readable" isn't a named export issue
const Readable = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable;
const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');
class Blob {
    constructor(){
        this[TYPE] = '';
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
            const a = blobParts;
            const length = Number(a.length);
            for(let i = 0; i < length; i++){
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) {
                    buffer = element;
                } else if (ArrayBuffer.isView(element)) {
                    buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                } else if (element instanceof ArrayBuffer) {
                    buffer = Buffer.from(element);
                } else if (element instanceof Blob) {
                    buffer = element[BUFFER];
                } else {
                    buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                }
                size += buffer.length;
                buffers.push(buffer);
            }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== undefined && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
            this[TYPE] = type;
        }
    }
    get size() {
        return this[BUFFER].length;
    }
    get type() {
        return this[TYPE];
    }
    text() {
        return Promise.resolve(this[BUFFER].toString());
    }
    arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
    }
    stream() {
        const readable = new Readable();
        readable._read = function() {};
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
    }
    toString() {
        return '[object Blob]';
    }
    slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === undefined) {
            relativeStart = 0;
        } else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        } else {
            relativeStart = Math.min(start, size);
        }
        if (end === undefined) {
            relativeEnd = size;
        } else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        } else {
            relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], {
            type: arguments[2]
        });
        blob[BUFFER] = slicedBuffer;
        return blob;
    }
}
Object.defineProperties(Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
    value: 'Blob',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */ /**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */ function FetchError(message, type, systemError) {
    Error.call(this, message);
    this.message = message;
    this.type = type;
    // when err.type is `system`, err.code contains system error code
    if (systemError) {
        this.code = this.errno = systemError.code;
    }
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';
let convert;
try {
    convert = (()=>{
        const e = new Error("Cannot find module 'encoding'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })().convert;
} catch (e) {}
const INTERNALS = Symbol('Body internals');
// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].PassThrough;
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ function Body(body) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$size = _ref.size;
    let size = _ref$size === undefined ? 0 : _ref$size;
    var _ref$timeout = _ref.timeout;
    let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
    if (body == null) {
        // body is undefined or null
        body = null;
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        body = Buffer.from(body.toString());
    } else if (isBlob(body)) ;
    else if (Buffer.isBuffer(body)) ;
    else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) ;
    else {
        // none of the above
        // coerce to string then buffer
        body = Buffer.from(String(body));
    }
    this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
    };
    this.size = size;
    this.timeout = timeout;
    if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) {
        body.on('error', function(err) {
            const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
            _this[INTERNALS].error = error;
        });
    }
}
Body.prototype = {
    get body () {
        return this[INTERNALS].body;
    },
    get bodyUsed () {
        return this[INTERNALS].disturbed;
    },
    /**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */ arrayBuffer () {
        return consumeBody.call(this).then(function(buf) {
            return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
    },
    /**
  * Return raw response as Blob
  *
  * @return Promise
  */ blob () {
        let ct = this.headers && this.headers.get('content-type') || '';
        return consumeBody.call(this).then(function(buf) {
            return Object.assign(// Prevent copying
            new Blob([], {
                type: ct.toLowerCase()
            }), {
                [BUFFER]: buf
            });
        });
    },
    /**
  * Decode response as json
  *
  * @return  Promise
  */ json () {
        var _this2 = this;
        return consumeBody.call(this).then(function(buffer) {
            try {
                return JSON.parse(buffer.toString());
            } catch (err) {
                return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
            }
        });
    },
    /**
  * Decode response as text
  *
  * @return  Promise
  */ text () {
        return consumeBody.call(this).then(function(buffer) {
            return buffer.toString();
        });
    },
    /**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */ buffer () {
        return consumeBody.call(this);
    },
    /**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */ textConverted () {
        var _this3 = this;
        return consumeBody.call(this).then(function(buffer) {
            return convertBody(buffer, _this3.headers);
        });
    }
};
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});
Body.mixIn = function(proto) {
    for (const name of Object.getOwnPropertyNames(Body.prototype)){
        // istanbul ignore else: future proof
        if (!(name in proto)) {
            const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
            Object.defineProperty(proto, name, desc);
        }
    }
};
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */ function consumeBody() {
    var _this4 = this;
    if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[INTERNALS].disturbed = true;
    if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error);
    }
    let body = this.body;
    // body is null
    if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is blob
    if (isBlob(body)) {
        body = body.stream();
    }
    // body is buffer
    if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body);
    }
    // istanbul ignore if: should never happen
    if (!(body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"])) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is stream
    // get ready to actually consume the body
    let accum = [];
    let accumBytes = 0;
    let abort = false;
    return new Body.Promise(function(resolve, reject) {
        let resTimeout;
        // allow timeout on slow response body
        if (_this4.timeout) {
            resTimeout = setTimeout(function() {
                abort = true;
                reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
            }, _this4.timeout);
        }
        // handle stream errors
        body.on('error', function(err) {
            if (err.name === 'AbortError') {
                // if the request was aborted, reject with this Error
                abort = true;
                reject(err);
            } else {
                // other errors, such as incorrect content-encoding
                reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
        body.on('data', function(chunk) {
            if (abort || chunk === null) {
                return;
            }
            if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
                return;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        });
        body.on('end', function() {
            if (abort) {
                return;
            }
            clearTimeout(resTimeout);
            try {
                resolve(Buffer.concat(accum, accumBytes));
            } catch (err) {
                // handle streams that have accumulated too much data (issue #414)
                reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
    });
}
/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */ function convertBody(buffer, headers) {
    if (typeof convert !== 'function') {
        throw new Error('The package `encoding` must be installed to use the textConverted() function');
    }
    const ct = headers.get('content-type');
    let charset = 'utf-8';
    let res, str;
    // header
    if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
    }
    // no charset in content type, peek at response body for at most 1024 bytes
    str = buffer.slice(0, 1024).toString();
    // html5
    if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    }
    // html4
    if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
            res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
            if (res) {
                res.pop(); // drop last quote
            }
        }
        if (res) {
            res = /charset=(.*)/i.exec(res.pop());
        }
    }
    // xml
    if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    }
    // found charset
    if (res) {
        charset = res.pop();
        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') {
            charset = 'gb18030';
        }
    }
    // turn raw buffers into a single utf-8 buffer
    return convert(buffer, 'UTF-8', charset).toString();
}
/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */ function isURLSearchParams(obj) {
    // Duck-typing as a necessary condition.
    if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
        return false;
    }
    // Brand-checking and more duck-typing as optional condition.
    return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}
/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */ function isBlob(obj) {
    return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */ function clone(instance) {
    let p1, p2;
    let body = instance.body;
    // don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used');
    }
    // check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"] && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new PassThrough();
        p2 = new PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        // set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1;
        body = p2;
    }
    return body;
}
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */ function extractContentType(body) {
    if (body === null) {
        // body is null
        return null;
    } else if (typeof body === 'string') {
        // body is string
        return 'text/plain;charset=UTF-8';
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        return 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if (isBlob(body)) {
        // body is blob
        return body.type || null;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return null;
    } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        return null;
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        return null;
    } else if (typeof body.getBoundary === 'function') {
        // detect form data input from form-data module
        return `multipart/form-data;boundary=${body.getBoundary()}`;
    } else if (body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"]) {
        // body is stream
        // can't really do much about this
        return null;
    } else {
        // Body constructor defaults other things to string
        return 'text/plain;charset=UTF-8';
    }
}
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */ function getTotalBytes(instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        return 0;
    } else if (isBlob(body)) {
        return body.size;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return body.length;
    } else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
        body.hasKnownLength && body.hasKnownLength()) {
            // 2.x
            return body.getLengthSync();
        }
        return null;
    } else {
        // body is stream
        return null;
    }
}
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */ function writeToStream(dest, instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        dest.end();
    } else if (isBlob(body)) {
        body.stream().pipe(dest);
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body);
        dest.end();
    } else {
        // body is stream
        body.pipe(dest);
    }
}
// expose Promise
Body.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */ const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(name) {
    name = `${name}`;
    if (invalidTokenRegex.test(name) || name === '') {
        throw new TypeError(`${name} is not a legal HTTP header name`);
    }
}
function validateValue(value) {
    value = `${value}`;
    if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
    }
}
/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */ function find(map, name) {
    name = name.toLowerCase();
    for(const key in map){
        if (key.toLowerCase() === name) {
            return key;
        }
    }
    return undefined;
}
const MAP = Symbol('map');
class Headers {
    /**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */ constructor(){
        let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[MAP] = Object.create(null);
        if (init instanceof Headers) {
            const rawHeaders = init.raw();
            const headerNames = Object.keys(rawHeaders);
            for (const headerName of headerNames){
                for (const value of rawHeaders[headerName]){
                    this.append(headerName, value);
                }
            }
            return;
        }
        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null) ;
        else if (typeof init === 'object') {
            const method = init[Symbol.iterator];
            if (method != null) {
                if (typeof method !== 'function') {
                    throw new TypeError('Header pairs must be iterable');
                }
                // sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                const pairs = [];
                for (const pair of init){
                    if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
                        throw new TypeError('Each header pair must be iterable');
                    }
                    pairs.push(Array.from(pair));
                }
                for (const pair of pairs){
                    if (pair.length !== 2) {
                        throw new TypeError('Each header pair must be a name/value tuple');
                    }
                    this.append(pair[0], pair[1]);
                }
            } else {
                // record<ByteString, ByteString>
                for (const key of Object.keys(init)){
                    const value = init[key];
                    this.append(key, value);
                }
            }
        } else {
            throw new TypeError('Provided initializer must be an object');
        }
    }
    /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */ get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === undefined) {
            return null;
        }
        return this[MAP][key].join(', ');
    }
    /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */ forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let pairs = getHeaders(this);
        let i = 0;
        while(i < pairs.length){
            var _pairs$i = pairs[i];
            const name = _pairs$i[0], value = _pairs$i[1];
            callback.call(thisArg, value, name, this);
            pairs = getHeaders(this);
            i++;
        }
    }
    /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== undefined ? key : name] = [
            value
        ];
    }
    /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            this[MAP][key].push(value);
        } else {
            this[MAP][name] = [
                value
            ];
        }
    }
    /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */ has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== undefined;
    }
    /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */ delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            delete this[MAP][key];
        }
    }
    /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */ raw() {
        return this[MAP];
    }
    /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */ keys() {
        return createHeadersIterator(this, 'key');
    }
    /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */ values() {
        return createHeadersIterator(this, 'value');
    }
    /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */ [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value');
    }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
    value: 'Headers',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Headers.prototype, {
    get: {
        enumerable: true
    },
    forEach: {
        enumerable: true
    },
    set: {
        enumerable: true
    },
    append: {
        enumerable: true
    },
    has: {
        enumerable: true
    },
    delete: {
        enumerable: true
    },
    keys: {
        enumerable: true
    },
    values: {
        enumerable: true
    },
    entries: {
        enumerable: true
    }
});
function getHeaders(headers) {
    let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
    const keys = Object.keys(headers[MAP]).sort();
    return keys.map(kind === 'key' ? function(k) {
        return k.toLowerCase();
    } : kind === 'value' ? function(k) {
        return headers[MAP][k].join(', ');
    } : function(k) {
        return [
            k.toLowerCase(),
            headers[MAP][k].join(', ')
        ];
    });
}
const INTERNAL = Symbol('internal');
function createHeadersIterator(target, kind) {
    const iterator = Object.create(HeadersIteratorPrototype);
    iterator[INTERNAL] = {
        target,
        kind,
        index: 0
    };
    return iterator;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
    next () {
        // istanbul ignore if
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
            throw new TypeError('Value of `this` is not a HeadersIterator');
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index >= len) {
            return {
                value: undefined,
                done: true
            };
        }
        this[INTERNAL].index = index + 1;
        return {
            value: values[index],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
    value: 'HeadersIterator',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */ function exportNodeCompatibleHeaders(headers) {
    const obj = Object.assign({
        __proto__: null
    }, headers[MAP]);
    // http.request() only supports string as Host header. This hack makes
    // specifying custom Host header possible.
    const hostHeaderKey = find(headers[MAP], 'Host');
    if (hostHeaderKey !== undefined) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
    }
    return obj;
}
/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */ function createHeadersLenient(obj) {
    const headers = new Headers();
    for (const name of Object.keys(obj)){
        if (invalidTokenRegex.test(name)) {
            continue;
        }
        if (Array.isArray(obj[name])) {
            for (const val of obj[name]){
                if (invalidHeaderCharRegex.test(val)) {
                    continue;
                }
                if (headers[MAP][name] === undefined) {
                    headers[MAP][name] = [
                        val
                    ];
                } else {
                    headers[MAP][name].push(val);
                }
            }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers[MAP][name] = [
                obj[name]
            ];
        }
    }
    return headers;
}
const INTERNALS$1 = Symbol('Response internals');
// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["default"].STATUS_CODES;
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class Response {
    constructor(){
        let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers(opts.headers);
        if (body != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(body);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        this[INTERNALS$1] = {
            url: opts.url,
            status,
            statusText: opts.statusText || STATUS_CODES[status],
            headers,
            counter: opts.counter
        };
    }
    get url() {
        return this[INTERNALS$1].url || '';
    }
    get status() {
        return this[INTERNALS$1].status;
    }
    /**
  * Convenience property representing if the request ended normally
  */ get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    }
    get redirected() {
        return this[INTERNALS$1].counter > 0;
    }
    get statusText() {
        return this[INTERNALS$1].statusText;
    }
    get headers() {
        return this[INTERNALS$1].headers;
    }
    /**
  * Clone this response
  *
  * @return  Response
  */ clone() {
        return new Response(clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}
Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
    value: 'Response',
    writable: false,
    enumerable: false,
    configurable: true
});
const INTERNALS$2 = Symbol('Request internals');
const URL = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].URL;
// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].parse;
const format_url = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].format;
/**
 * Wrapper around `new URL` to handle arbitrary URLs
 *
 * @param  {string} urlStr
 * @return {void}
 */ function parseURL(urlStr) {
    /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */ if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString();
    }
    // Fallback to old implementation for arbitrary URLs
    return parse_url(urlStr);
}
const streamDestructionSupported = 'destroy' in __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable.prototype;
/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */ function isRequest(input) {
    return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}
function isAbortSignal(signal) {
    const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
    return !!(proto && proto.constructor.name === 'AbortSignal');
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ class Request {
    constructor(input){
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let parsedURL;
        // normalize input
        if (!isRequest(input)) {
            if (input && input.href) {
                // in order to support Node.js' Url objects; though WHATWG's URL objects
                // will fall into this branch also (since their `toString()` will return
                // `href` property anyway)
                parsedURL = parseURL(input.href);
            } else {
                // coerce input to a string before attempting to parse
                parsedURL = parseURL(`${input}`);
            }
            input = {};
        } else {
            parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || 'GET';
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(inputBody);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ('signal' in init) signal = init.signal;
        if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal');
        }
        this[INTERNALS$2] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal
        };
        // node-fetch-only options
        this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
        this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
    }
    get method() {
        return this[INTERNALS$2].method;
    }
    get url() {
        return format_url(this[INTERNALS$2].parsedURL);
    }
    get headers() {
        return this[INTERNALS$2].headers;
    }
    get redirect() {
        return this[INTERNALS$2].redirect;
    }
    get signal() {
        return this[INTERNALS$2].signal;
    }
    /**
  * Clone this request
  *
  * @return  Request
  */ clone() {
        return new Request(this);
    }
}
Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
    value: 'Request',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ function getNodeRequestOptions(request) {
    const parsedURL = request[INTERNALS$2].parsedURL;
    const headers = new Headers(request[INTERNALS$2].headers);
    // fetch step 1.3
    if (!headers.has('Accept')) {
        headers.set('Accept', '*/*');
    }
    // Basic fetch
    if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError('Only absolute URLs are supported');
    }
    if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported');
    }
    if (request.signal && request.body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable && !streamDestructionSupported) {
        throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = '0';
    }
    if (request.body != null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === 'number') {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate');
    }
    let agent = request.agent;
    if (typeof agent === 'function') {
        agent = agent(parsedURL);
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
    });
}
/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */ /**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */ function AbortError(message) {
    Error.call(this, message);
    this.type = 'aborted';
    this.message = message;
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';
const URL$1 = __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["default"].URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$whatwg$2d$url$2f$lib$2f$public$2d$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].URL;
// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].PassThrough;
const isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
    const orig = new URL$1(original).hostname;
    const dest = new URL$1(destination).hostname;
    return orig === dest || orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest);
};
/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const isSameProtocol = function isSameProtocol(destination, original) {
    const orig = new URL$1(original).protocol;
    const dest = new URL$1(destination).protocol;
    return orig === dest;
};
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */ function fetch(url, opts) {
    // allow custom promise
    if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
    }
    Body.Promise = fetch.Promise;
    // wrap http.request into fetch
    return new fetch.Promise(function(resolve, reject) {
        // build request object
        const request = new Request(url, opts);
        const options = getNodeRequestOptions(request);
        const send = (options.protocol === 'https:' ? __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__["default"] : __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["default"]).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort() {
            let error = new AbortError('The user aborted a request.');
            reject(error);
            if (request.body && request.body instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["default"].Readable) {
                destroyStream(request.body, error);
            }
            if (!response || !response.body) return;
            response.body.emit('error', error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = function abortAndFinalize() {
            abort();
            finalize();
        };
        // send request
        const req = send(options);
        let reqTimeout;
        if (signal) {
            signal.addEventListener('abort', abortAndFinalize);
        }
        function finalize() {
            req.abort();
            if (signal) signal.removeEventListener('abort', abortAndFinalize);
            clearTimeout(reqTimeout);
        }
        if (request.timeout) {
            req.once('socket', function(socket) {
                reqTimeout = setTimeout(function() {
                    reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
                    finalize();
                }, request.timeout);
            });
        }
        req.on('error', function(err) {
            reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
            if (response && response.body) {
                destroyStream(response.body, err);
            }
            finalize();
        });
        fixResponseChunkedTransferBadEnding(req, function(err) {
            if (signal && signal.aborted) {
                return;
            }
            if (response && response.body) {
                destroyStream(response.body, err);
            }
        });
        /* c8 ignore next 18 */ if (parseInt(process.version.substring(1)) < 14) {
            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
            // properly handle when the socket close/end events are out of order.
            req.on('socket', function(s) {
                s.addListener('close', function(hadError) {
                    // if a data listener is still present we didn't end cleanly
                    const hasDataListener = s.listenerCount('data') > 0;
                    // if end happened before close but the socket didn't emit an error, do it now
                    if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                        const err = new Error('Premature close');
                        err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                        response.body.emit('error', err);
                    }
                });
            });
        }
        req.on('response', function(res) {
            clearTimeout(reqTimeout);
            const headers = createHeadersLenient(res.headers);
            // HTTP fetch step 5
            if (fetch.isRedirect(res.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new URL$1(location, request.url).toString();
                } catch (err) {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== 'manual') {
                        reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case 'error':
                        reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
                        finalize();
                        return;
                    case 'manual':
                        // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                        if (locationURL !== null) {
                            // handle corrupted header
                            try {
                                headers.set('Location', locationURL);
                            } catch (err) {
                                // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                                reject(err);
                            }
                        }
                        break;
                    case 'follow':
                        // HTTP-redirect fetch step 2
                        if (locationURL === null) {
                            break;
                        }
                        // HTTP-redirect fetch step 5
                        if (request.counter >= request.follow) {
                            reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 6 (counter increment)
                        // Create a new Request object.
                        const requestOpts = {
                            headers: new Headers(request.headers),
                            follow: request.follow,
                            counter: request.counter + 1,
                            agent: request.agent,
                            compress: request.compress,
                            method: request.method,
                            body: request.body,
                            signal: request.signal,
                            timeout: request.timeout,
                            size: request.size
                        };
                        if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                            for (const name of [
                                'authorization',
                                'www-authenticate',
                                'cookie',
                                'cookie2'
                            ]){
                                requestOpts.headers.delete(name);
                            }
                        }
                        // HTTP-redirect fetch step 9
                        if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                            reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 11
                        if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
                            requestOpts.method = 'GET';
                            requestOpts.body = undefined;
                            requestOpts.headers.delete('content-length');
                        }
                        // HTTP-redirect fetch step 15
                        resolve(fetch(new Request(locationURL, requestOpts)));
                        finalize();
                        return;
                }
            }
            // prepare response
            res.once('end', function() {
                if (signal) signal.removeEventListener('abort', abortAndFinalize);
            });
            let body = res.pipe(new PassThrough$1());
            const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding');
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].Z_SYNC_FLUSH,
                finishFlush: __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].Z_SYNC_FLUSH
            };
            // for gzip
            if (codings == 'gzip' || codings == 'x-gzip') {
                body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createGunzip(zlibOptions));
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // for deflate
            if (codings == 'deflate' || codings == 'x-deflate') {
                // handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = res.pipe(new PassThrough$1());
                raw.once('data', function(chunk) {
                    // see http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) {
                        body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createInflate());
                    } else {
                        body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createInflateRaw());
                    }
                    response = new Response(body, response_options);
                    resolve(response);
                });
                raw.on('end', function() {
                    // some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                    if (!response) {
                        response = new Response(body, response_options);
                        resolve(response);
                    }
                });
                return;
            }
            // for br
            if (codings == 'br' && typeof __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createBrotliDecompress === 'function') {
                body = body.pipe(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__["default"].createBrotliDecompress());
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // otherwise, use response as-is
            response = new Response(body, response_options);
            resolve(response);
        });
        writeToStream(req, request);
    });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    let socket;
    request.on('socket', function(s) {
        socket = s;
    });
    request.on('response', function(response) {
        const headers = response.headers;
        if (headers['transfer-encoding'] === 'chunked' && !headers['content-length']) {
            response.once('close', function(hadError) {
                // tests for socket presence, as in some situations the
                // the 'socket' event is not triggered for the request
                // (happens in deno), avoids `TypeError`
                // if a data listener is still present we didn't end cleanly
                const hasDataListener = socket && socket.listenerCount('data') > 0;
                if (hasDataListener && !hadError) {
                    const err = new Error('Premature close');
                    err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                    errorCallback(err);
                }
            });
        }
    });
}
function destroyStream(stream, err) {
    if (stream.destroy) {
        stream.destroy(err);
    } else {
        // node < 8
        stream.emit('error', err);
        stream.end();
    }
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */ fetch.isRedirect = function(code) {
    return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};
// expose Promise
fetch.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
const __TURBOPACK__default__export__ = fetch;
;
}),
"[project]/node_modules/nth-check/lib/esm/compile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compile",
    ()=>compile,
    "generate",
    ()=>generate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
;
function compile(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    const b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */ if (b < 0 && a <= 0) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1) return (index)=>index <= b;
    if (a === 0) return (index)=>index === b;
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1) return b < 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc : (index)=>index >= b;
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */ const absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    const bMod = (b % absA + absA) % absA;
    return a > 1 ? (index)=>index >= b && index % absA === bMod : (index)=>index <= b && index % absA === bMod;
}
function generate(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    let b = parsed[1] - 1;
    let n = 0;
    // Make sure to always return an increasing sequence
    if (a < 0) {
        const aPos = -a;
        // Get `b mod a`
        const minValue = (b % aPos + aPos) % aPos;
        return ()=>{
            const val = minValue + aPos * n++;
            return val > b ? null : val;
        };
    }
    if (a === 0) return b < 0 ? ()=>null : ()=>n++ === 0 ? b : null;
    if (b < 0) {
        b += a * Math.ceil(-b / a);
    }
    return ()=>a * n++ + b;
}
}),
"[project]/node_modules/nth-check/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nthCheck,
    "sequence",
    ()=>sequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nth-check/lib/esm/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nth-check/lib/esm/compile.js [app-rsc] (ecmascript)");
;
;
;
function nthCheck(formula) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(formula));
}
function sequence(formula) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(formula));
}
}),
"[project]/node_modules/nth-check/lib/esm/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse
]);
// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
const whitespace = new Set([
    9,
    10,
    12,
    13,
    32
]);
const ZERO = "0".charCodeAt(0);
const NINE = "9".charCodeAt(0);
function parse(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [
            2,
            0
        ];
    } else if (formula === "odd") {
        return [
            2,
            1
        ];
    }
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    let idx = 0;
    let a = 0;
    let sign = readSign();
    let number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        } else {
            sign = number = 0;
        }
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) {
        throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
    }
    return [
        a,
        sign * number
    ];
    //TURBOPACK unreachable
    ;
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        const start = idx;
        let value = 0;
        while(idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE){
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while(idx < formula.length && whitespace.has(formula.charCodeAt(idx))){
            idx++;
        }
    }
}
}),
"[project]/node_modules/parse5-htmlparser2-tree-adapter/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>adapter,
    "serializeDoctypeContent",
    ()=>serializeDoctypeContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/parse5/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html__$2e$DOCUMENT_MODE$3e$__ = __turbopack_context__.i("[project]/node_modules/parse5/dist/common/html.js [app-rsc] (ecmascript) <export * as html .DOCUMENT_MODE>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
;
function enquoteDoctypeId(id) {
    const quote = id.includes('"') ? "'" : '"';
    return quote + id + quote;
}
function serializeDoctypeContent(name, publicId, systemId) {
    let str = '!DOCTYPE ';
    if (name) {
        str += name;
    }
    if (publicId) {
        str += ` PUBLIC ${enquoteDoctypeId(publicId)}`;
    } else if (systemId) {
        str += ' SYSTEM';
    }
    if (systemId) {
        str += ` ${enquoteDoctypeId(systemId)}`;
    }
    return str;
}
const adapter = {
    // Re-exports from domhandler
    isCommentNode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isComment"],
    isElementNode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"],
    isTextNode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"],
    //Node construction
    createDocument () {
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"]([]);
        node['x-mode'] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html__$2e$DOCUMENT_MODE$3e$__["html"].DOCUMENT_MODE.NO_QUIRKS;
        return node;
    },
    createDocumentFragment () {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"]([]);
    },
    createElement (tagName, namespaceURI, attrs) {
        const attribs = Object.create(null);
        const attribsNamespace = Object.create(null);
        const attribsPrefix = Object.create(null);
        for(let i = 0; i < attrs.length; i++){
            const attrName = attrs[i].name;
            attribs[attrName] = attrs[i].value;
            attribsNamespace[attrName] = attrs[i].namespace;
            attribsPrefix[attrName] = attrs[i].prefix;
        }
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Element"](tagName, attribs, []);
        node.namespace = namespaceURI;
        node['x-attribsNamespace'] = attribsNamespace;
        node['x-attribsPrefix'] = attribsPrefix;
        return node;
    },
    createCommentNode (data) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Comment"](data);
    },
    createTextNode (value) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"](value);
    },
    //Tree mutation
    appendChild (parentNode, newNode) {
        const prev = parentNode.children[parentNode.children.length - 1];
        if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
        }
        parentNode.children.push(newNode);
        newNode.parent = parentNode;
    },
    insertBefore (parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.children.indexOf(referenceNode);
        const { prev } = referenceNode;
        if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
        }
        referenceNode.prev = newNode;
        newNode.next = referenceNode;
        parentNode.children.splice(insertionIdx, 0, newNode);
        newNode.parent = parentNode;
    },
    setTemplateContent (templateElement, contentElement) {
        adapter.appendChild(templateElement, contentElement);
    },
    getTemplateContent (templateElement) {
        return templateElement.children[0];
    },
    setDocumentType (document, name, publicId, systemId) {
        const data = serializeDoctypeContent(name, publicId, systemId);
        let doctypeNode = document.children.find((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirective"])(node) && node.name === '!doctype');
        if (doctypeNode) {
            doctypeNode.data = data !== null && data !== void 0 ? data : null;
        } else {
            doctypeNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProcessingInstruction"]('!doctype', data);
            adapter.appendChild(document, doctypeNode);
        }
        doctypeNode['x-name'] = name;
        doctypeNode['x-publicId'] = publicId;
        doctypeNode['x-systemId'] = systemId;
    },
    setDocumentMode (document, mode) {
        document['x-mode'] = mode;
    },
    getDocumentMode (document) {
        return document['x-mode'];
    },
    detachNode (node) {
        if (node.parent) {
            const idx = node.parent.children.indexOf(node);
            const { prev, next } = node;
            node.prev = null;
            node.next = null;
            if (prev) {
                prev.next = next;
            }
            if (next) {
                next.prev = prev;
            }
            node.parent.children.splice(idx, 1);
            node.parent = null;
        }
    },
    insertText (parentNode, text) {
        const lastChild = parentNode.children[parentNode.children.length - 1];
        if (lastChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(lastChild)) {
            lastChild.data += text;
        } else {
            adapter.appendChild(parentNode, adapter.createTextNode(text));
        }
    },
    insertTextBefore (parentNode, text, referenceNode) {
        const prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
        if (prevNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(prevNode)) {
            prevNode.data += text;
        } else {
            adapter.insertBefore(parentNode, adapter.createTextNode(text), referenceNode);
        }
    },
    adoptAttributes (recipient, attrs) {
        for(let i = 0; i < attrs.length; i++){
            const attrName = attrs[i].name;
            if (recipient.attribs[attrName] === undefined) {
                recipient.attribs[attrName] = attrs[i].value;
                recipient['x-attribsNamespace'][attrName] = attrs[i].namespace;
                recipient['x-attribsPrefix'][attrName] = attrs[i].prefix;
            }
        }
    },
    //Tree traversing
    getFirstChild (node) {
        return node.children[0];
    },
    getChildNodes (node) {
        return node.children;
    },
    getParentNode (node) {
        return node.parent;
    },
    getAttrList (element) {
        return element.attributes;
    },
    //Node data
    getTagName (element) {
        return element.name;
    },
    getNamespaceURI (element) {
        return element.namespace;
    },
    getTextNodeContent (textNode) {
        return textNode.data;
    },
    getCommentNodeContent (commentNode) {
        return commentNode.data;
    },
    getDocumentTypeNodeName (doctypeNode) {
        var _a;
        return (_a = doctypeNode['x-name']) !== null && _a !== void 0 ? _a : '';
    },
    getDocumentTypeNodePublicId (doctypeNode) {
        var _a;
        return (_a = doctypeNode['x-publicId']) !== null && _a !== void 0 ? _a : '';
    },
    getDocumentTypeNodeSystemId (doctypeNode) {
        var _a;
        return (_a = doctypeNode['x-systemId']) !== null && _a !== void 0 ? _a : '';
    },
    //Node types
    isDocumentTypeNode (node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirective"])(node) && node.name === '!doctype';
    },
    // Source code location
    setNodeSourceCodeLocation (node, location) {
        if (location) {
            node.startIndex = location.startOffset;
            node.endIndex = location.endOffset;
        }
        node.sourceCodeLocation = location;
    },
    getNodeSourceCodeLocation (node) {
        return node.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation (node, endLocation) {
        if (endLocation.endOffset != null) node.endIndex = endLocation.endOffset;
        node.sourceCodeLocation = {
            ...node.sourceCodeLocation,
            ...endLocation
        };
    }
};
}),
"[project]/node_modules/parse5-parser-stream/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParserStream",
    ()=>ParserStream
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/parse5/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/parse5/dist/parser/index.js [app-rsc] (ecmascript)");
;
;
class ParserStream extends __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["Writable"] {
    static getFragmentStream(fragmentContext, options) {
        const parser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"].getFragmentParser(fragmentContext, options);
        const stream = new ParserStream(options, parser);
        return stream;
    }
    /** The resulting document node. */ get document() {
        return this.parser.document;
    }
    getFragment() {
        return this.parser.getFragment();
    }
    /**
     * @param options Parsing options.
     */ constructor(options, parser = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"](options)){
        super({
            decodeStrings: false
        });
        this.parser = parser;
        this.lastChunkWritten = false;
        this.writeCallback = undefined;
        this.pendingHtmlInsertions = [];
        const resume = ()=>{
            for(let i = this.pendingHtmlInsertions.length - 1; i >= 0; i--){
                this.parser.tokenizer.insertHtmlAtCurrentPos(this.pendingHtmlInsertions[i]);
            }
            this.pendingHtmlInsertions.length = 0;
            //NOTE: keep parsing if we don't wait for the next input chunk
            this.parser.tokenizer.resume(this.writeCallback);
        };
        const documentWrite = (html)=>{
            if (!this.parser.stopped) {
                this.pendingHtmlInsertions.push(html);
            }
        };
        const scriptHandler = (scriptElement)=>{
            if (this.listenerCount('script') > 0) {
                this.parser.tokenizer.pause();
                this.emit('script', scriptElement, documentWrite, resume);
            }
        };
        this.parser.scriptHandler = scriptHandler;
    }
    //WritableStream implementation
    _write(chunk, _encoding, callback) {
        if (typeof chunk !== 'string') {
            throw new TypeError('Parser can work only with string streams.');
        }
        this.writeCallback = callback;
        this.parser.tokenizer.write(chunk, this.lastChunkWritten, this.writeCallback);
    }
    // TODO [engine:node@>=16]: Due to issues with Node < 16, we are overriding `end` instead of `_final`.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    end(chunk, encoding, callback) {
        this.lastChunkWritten = true;
        super.end(chunk || '', encoding, callback);
    }
}
}),
"[project]/node_modules/postgres-array/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const BACKSLASH = '\\';
const DQUOT = '"';
const LBRACE = '{';
const RBRACE = '}';
const LBRACKET = '[';
const EQUALS = '=';
const COMMA = ',';
/** When the raw value is this, it means a literal `null` */ const NULL_STRING = 'NULL';
/**
 * Parses an array according to
 * https://www.postgresql.org/docs/17/arrays.html#ARRAYS-IO
 *
 * Trusts the data (mostly), so only hook up to trusted Postgres servers.
 */ function makeParseArrayWithTransform(transform) {
    const haveTransform = transform != null;
    return function parseArray(str) {
        const rbraceIndex = str.length - 1;
        if (rbraceIndex === 1) {
            return [];
        }
        if (str[rbraceIndex] !== RBRACE) {
            throw new Error('Invalid array text - must end with }');
        }
        // If starts with `[`, it is specifying the index boundas. Skip past first `=`.
        let position = 0;
        if (str[position] === LBRACKET) {
            position = str.indexOf(EQUALS) + 1;
        }
        if (str[position++] !== LBRACE) {
            throw new Error('Invalid array text - must start with {');
        }
        const output = [];
        let current = output;
        const stack = [];
        let currentStringStart = position;
        let currentString = '';
        let expectValue = true;
        for(; position < rbraceIndex; ++position){
            let char = str[position];
            // > The array output routine will put double quotes around element values if
            // > they are empty strings, contain curly braces, delimiter characters, double
            // > quotes, backslashes, or white space, or match the word NULL. Double quotes
            // > and backslashes embedded in element values will be backslash-escaped.
            if (char === DQUOT) {
                // It's escaped
                currentStringStart = ++position;
                let dquot = str.indexOf(DQUOT, currentStringStart);
                let backSlash = str.indexOf(BACKSLASH, currentStringStart);
                while(backSlash !== -1 && backSlash < dquot){
                    position = backSlash;
                    const part = str.slice(currentStringStart, position);
                    currentString += part;
                    currentStringStart = ++position;
                    if (dquot === position++) {
                        // This was an escaped doublequote; find the next one!
                        dquot = str.indexOf(DQUOT, position);
                    }
                    // Either way, find the next backslash
                    backSlash = str.indexOf(BACKSLASH, position);
                }
                position = dquot;
                const part = str.slice(currentStringStart, position);
                currentString += part;
                current.push(haveTransform ? transform(currentString) : currentString);
                currentString = '';
                expectValue = false;
            } else if (char === LBRACE) {
                const newArray = [];
                current.push(newArray);
                stack.push(current);
                current = newArray;
                currentStringStart = position + 1;
                expectValue = true;
            } else if (char === COMMA) {
                expectValue = true;
            } else if (char === RBRACE) {
                expectValue = false;
                const arr = stack.pop();
                if (arr === undefined) {
                    throw new Error("Invalid array text - too many '}'");
                }
                current = arr;
            } else if (expectValue) {
                currentStringStart = position;
                while((char = str[position]) !== COMMA && char !== RBRACE && position < rbraceIndex){
                    ++position;
                }
                const part = str.slice(currentStringStart, position--);
                current.push(part === NULL_STRING ? null : haveTransform ? transform(part) : part);
                expectValue = false;
            } else {
                throw new Error('Was expecting delimeter');
            }
        }
        return output;
    };
}
const parseArray = makeParseArrayWithTransform();
exports.parse = (source, transform)=>transform != null ? makeParseArrayWithTransform(transform)(source) : parseArray(source);
}),
"[project]/node_modules/safer-buffer/safer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
var safer = {};
var key;
for(key in buffer){
    if (!buffer.hasOwnProperty(key)) continue;
    if (key === 'SlowBuffer' || key === 'Buffer') continue;
    safer[key] = buffer[key];
}
var Safer = safer.Buffer = {};
for(key in Buffer){
    if (!Buffer.hasOwnProperty(key)) continue;
    if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue;
    Safer[key] = Buffer[key];
}
safer.Buffer.prototype = Buffer.prototype;
if (!Safer.from || Safer.from === Uint8Array.from) {
    Safer.from = function(value, encodingOrOffset, length) {
        if (typeof value === 'number') {
            throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value);
        }
        if (value && typeof value.length === 'undefined') {
            throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value);
        }
        return Buffer(value, encodingOrOffset, length);
    };
}
if (!Safer.alloc) {
    Safer.alloc = function(size, fill, encoding) {
        if (typeof size !== 'number') {
            throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size);
        }
        if (size < 0 || size >= 2 * (1 << 30)) {
            throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
        var buf = Buffer(size);
        if (!fill || fill.length === 0) {
            buf.fill(0);
        } else if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
        return buf;
    };
}
if (!safer.kStringMaxLength) {
    try {
        safer.kStringMaxLength = process.binding('buffer').kStringMaxLength;
    } catch (e) {
    // we can't determine kStringMaxLength in environments where process.binding
    // is unsupported, so let's not set it
    }
}
if (!safer.constants) {
    safer.constants = {
        MAX_LENGTH: safer.kMaxLength
    };
    if (safer.kStringMaxLength) {
        safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
    }
}
module.exports = safer;
}),
"[project]/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var conversions = {};
module.exports = conversions;
function sign(x) {
    return x < 0 ? -1 : 1;
}
function evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if (x % 1 === 0.5 && (x & 1) === 0) {
        return Math.floor(x);
    } else {
        return Math.round(x);
    }
}
function createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) {
        --bitLength;
    }
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;
    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
    return function(V, opts) {
        if (!opts) opts = {};
        let x = +V;
        if (opts.enforceRange) {
            if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
            }
            x = sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
            }
            return x;
        }
        if (!isNaN(x) && opts.clamp) {
            x = evenRound(x);
            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) {
            return x - moduloVal;
        } else if (typeOpts.unsigned) {
            if (x < 0) {
                x += moduloVal;
            } else if (x === -0) {
                return 0;
            }
        }
        return x;
    };
}
conversions["void"] = function() {
    return undefined;
};
conversions["boolean"] = function(val) {
    return !!val;
};
conversions["byte"] = createNumberConversion(8, {
    unsigned: false
});
conversions["octet"] = createNumberConversion(8, {
    unsigned: true
});
conversions["short"] = createNumberConversion(16, {
    unsigned: false
});
conversions["unsigned short"] = createNumberConversion(16, {
    unsigned: true
});
conversions["long"] = createNumberConversion(32, {
    unsigned: false
});
conversions["unsigned long"] = createNumberConversion(32, {
    unsigned: true
});
conversions["long long"] = createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64
});
conversions["unsigned long long"] = createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64
});
conversions["double"] = function(V) {
    const x = +V;
    if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
    }
    return x;
};
conversions["unrestricted double"] = function(V) {
    const x = +V;
    if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
    }
    return x;
};
// not quite valid, but good enough for JS
conversions["float"] = conversions["double"];
conversions["unrestricted float"] = conversions["unrestricted double"];
conversions["DOMString"] = function(V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) {
        return "";
    }
    return String(V);
};
conversions["ByteString"] = function(V, opts) {
    const x = String(V);
    let c = undefined;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) {
            throw new TypeError("Argument is not a valid bytestring");
        }
    }
    return x;
};
conversions["USVString"] = function(V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            if (i === n - 1) {
                U.push(String.fromCodePoint(0xFFFD));
            } else {
                const d = S.charCodeAt(i + 1);
                if (0xDC00 <= d && d <= 0xDFFF) {
                    const a = c & 0x3FF;
                    const b = d & 0x3FF;
                    U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                    ++i;
                } else {
                    U.push(String.fromCodePoint(0xFFFD));
                }
            }
        }
    }
    return U.join('');
};
conversions["Date"] = function(V, opts) {
    if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
    }
    if (isNaN(V)) {
        return undefined;
    }
    return V;
};
conversions["RegExp"] = function(V, opts) {
    if (!(V instanceof RegExp)) {
        V = new RegExp(V);
    }
    return V;
};
}),
"[project]/node_modules/whatwg-encoding/lib/whatwg-encoding.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const iconvLite = __turbopack_context__.r("[project]/node_modules/whatwg-encoding/node_modules/iconv-lite/lib/index.js [app-rsc] (ecmascript)");
const supportedNames = __turbopack_context__.r("[project]/node_modules/whatwg-encoding/lib/supported-names.json.[json].cjs [app-rsc] (ecmascript)");
const labelsToNames = __turbopack_context__.r("[project]/node_modules/whatwg-encoding/lib/labels-to-names.json.[json].cjs [app-rsc] (ecmascript)");
const supportedNamesSet = new Set(supportedNames);
// https://encoding.spec.whatwg.org/#concept-encoding-get
exports.labelToName = (label)=>{
    label = String(label).trim().toLowerCase();
    return labelsToNames[label] || null;
};
// https://encoding.spec.whatwg.org/#decode
exports.decode = (uint8Array, fallbackEncodingName)=>{
    let encoding = fallbackEncodingName;
    if (!exports.isSupported(encoding)) {
        throw new RangeError(`"${encoding}" is not a supported encoding name`);
    }
    const bomEncoding = exports.getBOMEncoding(uint8Array);
    if (bomEncoding !== null) {
        encoding = bomEncoding;
    // iconv-lite will strip BOMs for us, so no need to do the extra byte removal that the spec does.
    // Note that we won't end up in the x-user-defined case when there's a bomEncoding.
    }
    if (encoding === "x-user-defined") {
        // https://encoding.spec.whatwg.org/#x-user-defined-decoder
        let result = "";
        for (const byte of uint8Array){
            if (byte <= 0x7F) {
                result += String.fromCodePoint(byte);
            } else {
                result += String.fromCodePoint(0xF780 + byte - 0x80);
            }
        }
        return result;
    }
    return iconvLite.decode(uint8Array, encoding);
};
// https://github.com/whatwg/html/issues/1910#issuecomment-254017369
exports.getBOMEncoding = (uint8Array)=>{
    if (uint8Array[0] === 0xFE && uint8Array[1] === 0xFF) {
        return "UTF-16BE";
    } else if (uint8Array[0] === 0xFF && uint8Array[1] === 0xFE) {
        return "UTF-16LE";
    } else if (uint8Array[0] === 0xEF && uint8Array[1] === 0xBB && uint8Array[2] === 0xBF) {
        return "UTF-8";
    }
    return null;
};
exports.isSupported = (name)=>{
    return supportedNamesSet.has(String(name));
};
}),
"[project]/node_modules/whatwg-mimetype/lib/mime-type-parameters.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { asciiLowercase, solelyContainsHTTPTokenCodePoints, soleyContainsHTTPQuotedStringTokenCodePoints } = __turbopack_context__.r("[project]/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)");
module.exports = class MIMETypeParameters {
    constructor(map){
        this._map = map;
    }
    get size() {
        return this._map.size;
    }
    get(name) {
        name = asciiLowercase(String(name));
        return this._map.get(name);
    }
    has(name) {
        name = asciiLowercase(String(name));
        return this._map.has(name);
    }
    set(name, value) {
        name = asciiLowercase(String(name));
        value = String(value);
        if (!solelyContainsHTTPTokenCodePoints(name)) {
            throw new Error(`Invalid MIME type parameter name "${name}": only HTTP token code points are valid.`);
        }
        if (!soleyContainsHTTPQuotedStringTokenCodePoints(value)) {
            throw new Error(`Invalid MIME type parameter value "${value}": only HTTP quoted-string token code points are ` + `valid.`);
        }
        return this._map.set(name, value);
    }
    clear() {
        this._map.clear();
    }
    delete(name) {
        name = asciiLowercase(String(name));
        return this._map.delete(name);
    }
    forEach(callbackFn, thisArg) {
        this._map.forEach(callbackFn, thisArg);
    }
    keys() {
        return this._map.keys();
    }
    values() {
        return this._map.values();
    }
    entries() {
        return this._map.entries();
    }
    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }
};
}),
"[project]/node_modules/whatwg-mimetype/lib/mime-type.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MIMETypeParameters = __turbopack_context__.r("[project]/node_modules/whatwg-mimetype/lib/mime-type-parameters.js [app-rsc] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/whatwg-mimetype/lib/parser.js [app-rsc] (ecmascript)");
const serialize = __turbopack_context__.r("[project]/node_modules/whatwg-mimetype/lib/serializer.js [app-rsc] (ecmascript)");
const { asciiLowercase, solelyContainsHTTPTokenCodePoints } = __turbopack_context__.r("[project]/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)");
module.exports = class MIMEType {
    constructor(string){
        string = String(string);
        const result = parse(string);
        if (result === null) {
            throw new Error(`Could not parse MIME type string "${string}"`);
        }
        this._type = result.type;
        this._subtype = result.subtype;
        this._parameters = new MIMETypeParameters(result.parameters);
    }
    static parse(string) {
        try {
            return new this(string);
        } catch (e) {
            return null;
        }
    }
    get essence() {
        return `${this.type}/${this.subtype}`;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        value = asciiLowercase(String(value));
        if (value.length === 0) {
            throw new Error("Invalid type: must be a non-empty string");
        }
        if (!solelyContainsHTTPTokenCodePoints(value)) {
            throw new Error(`Invalid type ${value}: must contain only HTTP token code points`);
        }
        this._type = value;
    }
    get subtype() {
        return this._subtype;
    }
    set subtype(value) {
        value = asciiLowercase(String(value));
        if (value.length === 0) {
            throw new Error("Invalid subtype: must be a non-empty string");
        }
        if (!solelyContainsHTTPTokenCodePoints(value)) {
            throw new Error(`Invalid subtype ${value}: must contain only HTTP token code points`);
        }
        this._subtype = value;
    }
    get parameters() {
        return this._parameters;
    }
    toString() {
        // The serialize function works on both "MIME type records" (i.e. the results of parse) and on this class, since
        // this class's interface is identical.
        return serialize(this);
    }
    isJavaScript({ prohibitParameters = false } = {}) {
        switch(this._type){
            case "text":
                {
                    switch(this._subtype){
                        case "ecmascript":
                        case "javascript":
                        case "javascript1.0":
                        case "javascript1.1":
                        case "javascript1.2":
                        case "javascript1.3":
                        case "javascript1.4":
                        case "javascript1.5":
                        case "jscript":
                        case "livescript":
                        case "x-ecmascript":
                        case "x-javascript":
                            {
                                return !prohibitParameters || this._parameters.size === 0;
                            }
                        default:
                            {
                                return false;
                            }
                    }
                }
            case "application":
                {
                    switch(this._subtype){
                        case "ecmascript":
                        case "javascript":
                        case "x-ecmascript":
                        case "x-javascript":
                            {
                                return !prohibitParameters || this._parameters.size === 0;
                            }
                        default:
                            {
                                return false;
                            }
                    }
                }
            default:
                {
                    return false;
                }
        }
    }
    isXML() {
        return this._subtype === "xml" && (this._type === "text" || this._type === "application") || this._subtype.endsWith("+xml");
    }
    isHTML() {
        return this._subtype === "html" && this._type === "text";
    }
};
}),
"[project]/node_modules/whatwg-mimetype/lib/parser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { removeLeadingAndTrailingHTTPWhitespace, removeTrailingHTTPWhitespace, isHTTPWhitespaceChar, solelyContainsHTTPTokenCodePoints, soleyContainsHTTPQuotedStringTokenCodePoints, asciiLowercase, collectAnHTTPQuotedString } = __turbopack_context__.r("[project]/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)");
module.exports = (input)=>{
    input = removeLeadingAndTrailingHTTPWhitespace(input);
    let position = 0;
    let type = "";
    while(position < input.length && input[position] !== "/"){
        type += input[position];
        ++position;
    }
    if (type.length === 0 || !solelyContainsHTTPTokenCodePoints(type)) {
        return null;
    }
    if (position >= input.length) {
        return null;
    }
    // Skips past "/"
    ++position;
    let subtype = "";
    while(position < input.length && input[position] !== ";"){
        subtype += input[position];
        ++position;
    }
    subtype = removeTrailingHTTPWhitespace(subtype);
    if (subtype.length === 0 || !solelyContainsHTTPTokenCodePoints(subtype)) {
        return null;
    }
    const mimeType = {
        type: asciiLowercase(type),
        subtype: asciiLowercase(subtype),
        parameters: new Map()
    };
    while(position < input.length){
        // Skip past ";"
        ++position;
        while(isHTTPWhitespaceChar(input[position])){
            ++position;
        }
        let parameterName = "";
        while(position < input.length && input[position] !== ";" && input[position] !== "="){
            parameterName += input[position];
            ++position;
        }
        parameterName = asciiLowercase(parameterName);
        if (position < input.length) {
            if (input[position] === ";") {
                continue;
            }
            // Skip past "="
            ++position;
        }
        let parameterValue = null;
        if (input[position] === "\"") {
            [parameterValue, position] = collectAnHTTPQuotedString(input, position);
            while(position < input.length && input[position] !== ";"){
                ++position;
            }
        } else {
            parameterValue = "";
            while(position < input.length && input[position] !== ";"){
                parameterValue += input[position];
                ++position;
            }
            parameterValue = removeTrailingHTTPWhitespace(parameterValue);
            if (parameterValue === "") {
                continue;
            }
        }
        if (parameterName.length > 0 && solelyContainsHTTPTokenCodePoints(parameterName) && soleyContainsHTTPQuotedStringTokenCodePoints(parameterValue) && !mimeType.parameters.has(parameterName)) {
            mimeType.parameters.set(parameterName, parameterValue);
        }
    }
    return mimeType;
};
}),
"[project]/node_modules/whatwg-mimetype/lib/serializer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { solelyContainsHTTPTokenCodePoints } = __turbopack_context__.r("[project]/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)");
module.exports = (mimeType)=>{
    let serialization = `${mimeType.type}/${mimeType.subtype}`;
    if (mimeType.parameters.size === 0) {
        return serialization;
    }
    for (let [name, value] of mimeType.parameters){
        serialization += ";";
        serialization += name;
        serialization += "=";
        if (!solelyContainsHTTPTokenCodePoints(value) || value.length === 0) {
            value = value.replace(/(["\\])/ug, "\\$1");
            value = `"${value}"`;
        }
        serialization += value;
    }
    return serialization;
};
}),
"[project]/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.removeLeadingAndTrailingHTTPWhitespace = (string)=>{
    return string.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "");
};
exports.removeTrailingHTTPWhitespace = (string)=>{
    return string.replace(/[ \t\n\r]+$/u, "");
};
exports.isHTTPWhitespaceChar = (char)=>{
    return char === " " || char === "\t" || char === "\n" || char === "\r";
};
exports.solelyContainsHTTPTokenCodePoints = (string)=>{
    return /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(string);
};
exports.soleyContainsHTTPQuotedStringTokenCodePoints = (string)=>{
    return /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(string);
};
exports.asciiLowercase = (string)=>{
    return string.replace(/[A-Z]/ug, (l)=>l.toLowerCase());
};
// This variant only implements it with the extract-value flag set.
exports.collectAnHTTPQuotedString = (input, position)=>{
    let value = "";
    position++;
    while(true){
        while(position < input.length && input[position] !== "\"" && input[position] !== "\\"){
            value += input[position];
            ++position;
        }
        if (position >= input.length) {
            break;
        }
        const quoteOrBackslash = input[position];
        ++position;
        if (quoteOrBackslash === "\\") {
            if (position >= input.length) {
                value += "\\";
                break;
            }
            value += input[position];
            ++position;
        } else {
            break;
        }
    }
    return [
        value,
        position
    ];
};
}),
"[project]/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const usm = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)");
exports.implementation = class URLImpl {
    constructor(constructorArgs){
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === "failure") {
                throw new TypeError("Invalid base URL");
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    // TODO: query stuff
    }
    get href() {
        return usm.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    }
    get origin() {
        return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
        return this._url.scheme + ":";
    }
    set protocol(v) {
        usm.basicURLParse(v + ":", {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) {
            return "";
        }
        if (url.port === null) {
            return usm.serializeHost(url.host);
        }
        return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
    }
    set host(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) {
            return "";
        }
        return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) {
            return "";
        }
        return usm.serializeInteger(this._url.port);
    }
    set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        if (v === "") {
            this._url.port = null;
        } else {
            usm.basicURLParse(v, {
                url: this._url,
                stateOverride: "port"
            });
        }
    }
    get pathname() {
        if (this._url.cannotBeABaseURL) {
            return this._url.path[0];
        }
        if (this._url.path.length === 0) {
            return "";
        }
        return "/" + this._url.path.join("/");
    }
    set pathname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        this._url.path = [];
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") {
            return "";
        }
        return "?" + this._url.query;
    }
    set search(v) {
        // TODO: query stuff
        const url = this._url;
        if (v === "") {
            url.query = null;
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, {
            url,
            stateOverride: "query"
        });
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
            return "";
        }
        return "#" + this._url.fragment;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
}),
"[project]/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)");
const utils = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)");
const Impl = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)");
const impl = utils.implSymbol;
function URL(url) {
    if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
    }
    if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 2; ++i){
        args[i] = arguments[i];
    }
    args[0] = conversions["USVString"](args[0]);
    if (args[1] !== undefined) {
        args[1] = conversions["USVString"](args[1]);
    }
    module.exports.setup(this, args);
}
URL.prototype.toJSON = function toJSON() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 0; ++i){
        args[i] = arguments[i];
    }
    return this[impl].toJSON.apply(this[impl], args);
};
Object.defineProperty(URL.prototype, "href", {
    get () {
        return this[impl].href;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
    },
    enumerable: true,
    configurable: true
});
URL.prototype.toString = function() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    return this.href;
};
Object.defineProperty(URL.prototype, "origin", {
    get () {
        return this[impl].origin;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "protocol", {
    get () {
        return this[impl].protocol;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "username", {
    get () {
        return this[impl].username;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "password", {
    get () {
        return this[impl].password;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "host", {
    get () {
        return this[impl].host;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hostname", {
    get () {
        return this[impl].hostname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "port", {
    get () {
        return this[impl].port;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "pathname", {
    get () {
        return this[impl].pathname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "search", {
    get () {
        return this[impl].search;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hash", {
    get () {
        return this[impl].hash;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
    },
    enumerable: true,
    configurable: true
});
module.exports = {
    is (obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
    },
    create (constructorArgs, privateData) {
        let obj = Object.create(URL.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
    },
    setup (obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
    },
    interface: URL,
    expose: {
        Window: {
            URL: URL
        },
        Worker: {
            URL: URL
        }
    }
};
}),
"[project]/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.URL = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)").interface;
exports.serializeURL = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeURL;
exports.serializeURLOrigin = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeURLOrigin;
exports.basicURLParse = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").basicURLParse;
exports.setTheUsername = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").setTheUsername;
exports.setThePassword = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").setThePassword;
exports.serializeHost = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeHost;
exports.serializeInteger = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeInteger;
exports.parseURL = __turbopack_context__.r("[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").parseURL;
}),
"[project]/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const punycode = __turbopack_context__.r("[externals]/punycode [external] (punycode, cjs)");
const tr46 = __turbopack_context__.r("[project]/node_modules/tr46/index.js [app-rsc] (ecmascript)");
const specialSchemes = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const failure = Symbol("failure");
function countSymbols(str) {
    return punycode.ucs2.decode(str).length;
}
function at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function isASCIIAlphanumeric(c) {
    return isASCIIAlpha(c) || isASCIIDigit(c);
}
function isASCIIHex(c) {
    return isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
function isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
    return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}
function isWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function containsForbiddenHostCodePointExcludingPercent(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function isSpecialScheme(scheme) {
    return specialSchemes[scheme] !== undefined;
}
function isSpecial(url) {
    return isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
    return specialSchemes[scheme];
}
function percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) {
        hex = "0" + hex;
    }
    return "%" + hex;
}
function utf8PercentEncode(c) {
    const buf = new Buffer(c);
    let str = "";
    for(let i = 0; i < buf.length; ++i){
        str += percentEncode(buf[i]);
    }
    return str;
}
function utf8PercentDecode(str) {
    const input = new Buffer(str);
    const output = [];
    for(let i = 0; i < input.length; ++i){
        if (input[i] !== 37) {
            output.push(input[i]);
        } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
            output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
            i += 2;
        } else {
            output.push(input[i]);
        }
    }
    return new Buffer(output).toString();
}
function isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
const extraPathPercentEncodeSet = new Set([
    32,
    34,
    35,
    60,
    62,
    63,
    96,
    123,
    125
]);
function isPathPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}
const extraUserinfoPercentEncodeSet = new Set([
    47,
    58,
    59,
    61,
    64,
    91,
    92,
    93,
    94,
    124
]);
function isUserinfoPercentEncode(c) {
    return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}
function percentEncodeChar(c, encodeSetPredicate) {
    const cStr = String.fromCodePoint(c);
    if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
    }
    return cStr;
}
function parseIPv4Number(input) {
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") {
        return 0;
    }
    const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
    if (regex.test(input)) {
        return failure;
    }
    return parseInt(input, R);
}
function parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
            parts.pop();
        }
    }
    if (parts.length > 4) {
        return input;
    }
    const numbers = [];
    for (const part of parts){
        if (part === "") {
            return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
            return input;
        }
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) {
            return failure;
        }
    }
    if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
    }
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
    }
    return ipv4;
}
function serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) {
            output = "." + output;
        }
        n = Math.floor(n / 256);
    }
    return output;
}
function parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = punycode.ucs2.decode(input);
    if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
            return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) {
            return failure;
        }
        if (input[pointer] === 58) {
            if (compress !== null) {
                return failure;
            }
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt(at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === 46) {
            if (length === 0) {
                return failure;
            }
            pointer -= length;
            if (pieceIndex > 6) {
                return failure;
            }
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === 46 && numbersSeen < 4) {
                        ++pointer;
                    } else {
                        return failure;
                    }
                }
                if (!isASCIIDigit(input[pointer])) {
                    return failure;
                }
                while(isASCIIDigit(input[pointer])){
                    const number = parseInt(at(input, pointer));
                    if (ipv4Piece === null) {
                        ipv4Piece = number;
                    } else if (ipv4Piece === 0) {
                        return failure;
                    } else {
                        ipv4Piece = ipv4Piece * 10 + number;
                    }
                    if (ipv4Piece > 255) {
                        return failure;
                    }
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                    ++pieceIndex;
                }
            }
            if (numbersSeen !== 4) {
                return failure;
            }
            break;
        } else if (input[pointer] === 58) {
            ++pointer;
            if (input[pointer] === undefined) {
                return failure;
            }
        } else if (input[pointer] !== undefined) {
            return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) {
        return failure;
    }
    return address;
}
function serializeIPv6(address) {
    let output = "";
    const seqResult = findLongestZeroSequence(address);
    const compress = seqResult.idx;
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) {
            continue;
        } else if (ignore0) {
            ignore0 = false;
        }
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
            output += ":";
        }
    }
    return output;
}
function parseHost(input, isSpecialArg) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
            return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
    }
    if (!isSpecialArg) {
        return parseOpaqueHost(input);
    }
    const domain = utf8PercentDecode(input);
    const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
    if (asciiDomain === null) {
        return failure;
    }
    if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
    }
    const ipv4Host = parseIPv4(asciiDomain);
    if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
    }
    return asciiDomain;
}
function parseOpaqueHost(input) {
    if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
    }
    let output = "";
    const decoded = punycode.ucs2.decode(input);
    for(let i = 0; i < decoded.length; ++i){
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
    }
    return output;
}
function findLongestZeroSequence(arr) {
    let maxIdx = null;
    let maxLen = 1; // only find elements > 1
    let currStart = null;
    let currLen = 0;
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] !== 0) {
            if (currLen > maxLen) {
                maxIdx = currStart;
                maxLen = currLen;
            }
            currStart = null;
            currLen = 0;
        } else {
            if (currStart === null) {
                currStart = i;
            }
            ++currLen;
        }
    }
    // if trailing zeros
    if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
    }
    return {
        idx: maxIdx,
        len: maxLen
    };
}
function serializeHost(host) {
    if (typeof host === "number") {
        return serializeIPv4(host);
    }
    // IPv6 serializer
    if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
    }
    return host;
}
function trimControlChars(url) {
    return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}
function trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/g, "");
}
function shortenPath(url) {
    const path = url.path;
    if (path.length === 0) {
        return;
    }
    if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
    }
    path.pop();
}
function includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}
function isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/.test(string);
}
function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null,
            cannotBeABaseURL: false
        };
        const res = trimControlChars(this.input);
        if (res !== this.input) {
            this.parseError = true;
        }
        this.input = res;
    }
    const res = trimTabAndNewline(this.input);
    if (res !== this.input) {
        this.parseError = true;
    }
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = punycode.ucs2.decode(this.input);
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
            break; // terminate algorithm
        } else if (ret === failure) {
            this.failure = true;
            break;
        }
    }
}
URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
    } else if (c === 58) {
        if (this.stateOverride) {
            if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
            }
            if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
            }
            if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
            }
            if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
                return false;
            }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
            return false;
        }
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
                this.parseError = true;
            }
            this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
            this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
            this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.cannotBeABaseURL = true;
            this.url.path.push("");
            this.state = "cannot-be-a-base-URL path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
        return failure;
    } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === 47) {
        this.state = "authority";
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
    } else if (c === 47) {
        this.state = "relative slash";
    } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if (isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "special authority ignore slashes";
    } else if (c === 47) {
        this.state = "authority";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
    } else {
        this.parseError = true;
    }
    return true;
};
URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
            this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
            } else {
                this.url.username += encodedCodePoints;
            }
        }
        this.buffer = "";
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
            return false;
        }
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
            return false;
        }
    } else {
        if (c === 91) {
            this.arrFlag = true;
        } else if (c === 93) {
            this.arrFlag = false;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if (isASCIIDigit(c)) {
        this.buffer += cStr;
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return failure;
            }
            this.url.port = port === defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) {
            return false;
        }
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
const fileOtherwiseCodePoints = new Set([
    47,
    92,
    63,
    35
]);
URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
        } else if (c === 63) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = "";
            this.state = "query";
        } else if (c === 35) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.state = "fragment";
        } else {
            if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
            !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                shortenPath(this.url);
            } else {
                this.parseError = true;
            }
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
            } else {
                this.url.host = this.base.host;
            }
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) {
                return false;
            }
            this.state = "path start";
        } else {
            let host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
                return failure;
            }
            if (host === "localhost") {
                host = "";
            }
            this.url.host = host;
            if (this.stateOverride) {
                return false;
            }
            this.buffer = "";
            this.state = "path start";
        }
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if (isSpecial(this.url)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
            --this.pointer;
        }
    } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== 47) {
            --this.pointer;
        }
    }
    return true;
};
URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if (isSpecial(this.url) && c === 92) {
            this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
            shortenPath(this.url);
            if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
                this.url.path.push("");
            }
        } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== "" && this.url.host !== null) {
                    this.parseError = true;
                    this.url.host = "";
                }
                this.buffer = this.buffer[0] + ":";
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) {
            while(this.url.path.length > 1 && this.url.path[0] === ""){
                this.parseError = true;
                this.url.path.shift();
            }
        }
        if (c === 63) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
    }
    return true;
};
URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
    if (c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== 37) {
            this.parseError = true;
        }
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        if (!isNaN(c)) {
            this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
        }
    }
    return true;
};
URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
            this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
        for(let i = 0; i < buffer.length; ++i){
            if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 || buffer[i] === 0x3C || buffer[i] === 0x3E) {
                this.url.query += percentEncode(buffer[i]);
            } else {
                this.url.query += String.fromCodePoint(buffer[i]);
            }
        }
        this.buffer = "";
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (isNaN(c)) {} else if (c === 0x0) {
        this.parseError = true;
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
    }
    return true;
};
function serializeURL(url, excludeFragment) {
    let output = url.scheme + ":";
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") {
                output += ":" + url.password;
            }
            output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
            output += ":" + url.port;
        }
    } else if (url.host === null && url.scheme === "file") {
        output += "//";
    }
    if (url.cannotBeABaseURL) {
        output += url.path[0];
    } else {
        for (const string of url.path){
            output += "/" + string;
        }
    }
    if (url.query !== null) {
        output += "?" + url.query;
    }
    if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
    }
    return output;
}
function serializeOrigin(tuple) {
    let result = tuple.scheme + "://";
    result += serializeHost(tuple.host);
    if (tuple.port !== null) {
        result += ":" + tuple.port;
    }
    return result;
}
module.exports.serializeURL = serializeURL;
module.exports.serializeURLOrigin = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            try {
                return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
            } catch (e) {
                // serializing an opaque origin returns "null"
                return "null";
            }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // spec says "exercise to the reader", chrome says "file://"
            return "file://";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
module.exports.basicURLParse = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) {
        return "failure";
    }
    return usm.url;
};
module.exports.setTheUsername = function(url, username) {
    url.username = "";
    const decoded = punycode.ucs2.decode(username);
    for(let i = 0; i < decoded.length; ++i){
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.setThePassword = function(url, password) {
    url.password = "";
    const decoded = punycode.ucs2.decode(password);
    for(let i = 0; i < decoded.length; ++i){
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
module.exports.serializeInteger = function(integer) {
    return String(integer);
};
module.exports.parseURL = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    // We don't handle blobs, so this just delegates:
    return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};
}),
"[project]/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports.mixin = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for(let i = 0; i < keys.length; ++i){
        Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
    }
};
module.exports.wrapperSymbol = Symbol("wrapper");
module.exports.implSymbol = Symbol("impl");
module.exports.wrapperForImpl = function(impl) {
    return impl[module.exports.wrapperSymbol];
};
module.exports.implForWrapper = function(wrapper) {
    return wrapper[module.exports.implSymbol];
};
}),
]})(),
"[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("@prisma/client-2c3a283f134fdcb6", () => require("@prisma/client-2c3a283f134fdcb6"));

module.exports = mod;
}),
"[project]/node_modules/@grammyjs/types/mod.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* The comment below makes Vite recognize an empty main file as a valid CJS module. */ // module.exports
}),
"[project]/node_modules/boolbase/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    trueFunc: function trueFunc() {
        return true;
    },
    falseFunc: function falseFunc() {
        return false;
    }
};
}),
"[project]/node_modules/debug/src/browser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-rsc] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/node_modules/debug/src/common.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/node_modules/ms/index.js [app-rsc] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/node_modules/debug/src/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/browser.js [app-rsc] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/node.js [app-rsc] (ecmascript)");
}
}),
"[project]/node_modules/debug/src/node.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = (()=>{
        const e = new Error("Cannot find module 'supports-color'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/node_modules/debug/src/common.js [app-rsc] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/node_modules/dotenv/dist/config.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const dotenv = __turbopack_context__.r("[project]/node_modules/dotenv/dist/index.cjs [app-rsc] (ecmascript)");
// Keep side-effect imports quiet unless logging is explicitly requested.
const quiet = process.env.DOTENV_QUIET != null ? process.env.DOTENV_QUIET : process.env.DOTENV_CONFIG_QUIET;
dotenv.config({
    quiet: quiet != null ? quiet : true
});
}),
"[project]/node_modules/dotenv/dist/index.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var j = (e, n)=>()=>{
        try {
            return n || e((n = {
                exports: {}
            }).exports, n), n.exports;
        } catch (t) {
            throw n = 0, t;
        }
    };
var k = j((xe, U)=>{
    function G(e) {
        return typeof e == "string" ? ![
            "false",
            "0",
            "no",
            "off",
            ""
        ].includes(e.toLowerCase()) : !!e;
    }
    function Y(e = process.env) {
        let n = {};
        for (let t of [
            "ENCODING",
            "PATH",
            "QUIET",
            "DEBUG",
            "OVERRIDE",
            "FAST"
        ]){
            let o = e[`DOTENV_${t}`] != null ? e[`DOTENV_${t}`] : e[`DOTENV_CONFIG_${t}`];
            o != null && (n[t.toLowerCase()] = t === "ENCODING" || t === "PATH" ? o : G(o));
        }
        return n;
    }
    U.exports = {
        parseBoolean: G,
        optionsFromEnv: Y
    };
});
var N = j((ye, x)=>{
    var z = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)"), I = __turbopack_context__.r("[externals]/path [external] (path, cjs)"), Z = __turbopack_context__.r("[externals]/os [external] (os, cjs)"), { URL: ee, fileURLToPath: te } = __turbopack_context__.r("[externals]/url [external] (url, cjs)"), { parseBoolean: $, optionsFromEnv: B } = k(), re = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg, b = new Uint8Array(256);
    for(let e = 48; e <= 57; e++)b[e] = 1;
    for(let e = 65; e <= 90; e++)b[e] = 1;
    for(let e = 97; e <= 122; e++)b[e] = 1;
    b[45] = 1;
    b[46] = 1;
    b[95] = 1;
    function ne(e) {
        let n = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let o;
        for(; (o = re.exec(t)) != null;){
            let r = o[1], s = o[2] || "";
            s = s.trim();
            let i = s[0];
            s = s.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), i === '"' && (s = s.replace(/\\n/g, `
`), s = s.replace(/\\r/g, "\r")), n[r] = s;
        }
        return n;
    }
    function w(e) {
        return e <= 32 ? e === 32 || e >= 9 && e <= 13 : e >= 160 && (e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279);
    }
    function q(e) {
        return e === 10 || e === 8232 || e === 8233;
    }
    function oe(e) {
        let n = {}, t = typeof e == "string" ? e : e.toString();
        t.indexOf("\r") !== -1 && (t = t.replace(/\r\n?/g, `
`));
        let o = t.length, r = 0;
        for(; r < o;){
            let s = t.charCodeAt(r);
            for(; r < o && w(s);)r++, s = t.charCodeAt(r);
            if (r >= o) break;
            if (s === 35) {
                for(; r < o && !q(t.charCodeAt(r));)r++;
                continue;
            }
            let i = -1;
            if (s === 101 && r + 6 < o && t.charCodeAt(r + 1) === 120 && t.charCodeAt(r + 2) === 112 && t.charCodeAt(r + 3) === 111 && t.charCodeAt(r + 4) === 114 && t.charCodeAt(r + 5) === 116) {
                let v = t.charCodeAt(r + 6);
                if (w(v)) {
                    let u = r + 7;
                    for(; u < o && w(t.charCodeAt(u));)u++;
                    b[t.charCodeAt(u)] && (i = r + 6, r = u);
                } else s = t.charCodeAt(r);
            }
            let l = r, d = 0;
            for(; r < o && (d = t.charCodeAt(r), b[d]);)r++;
            if (r === l) {
                for(; r < o && !q(t.charCodeAt(r));)r++;
                continue;
            }
            let h = t.slice(l, r), f = r;
            if (r >= o && (d = 0), w(d)) do r++, d = r < o ? t.charCodeAt(r) : 0;
            while (w(d))
            if (d === 61) r++;
            else if (d === 58 && r === f && r + 1 < o && w(t.charCodeAt(r + 1))) r += 2;
            else {
                for(r = i === -1 ? f : i; r < o && !q(t.charCodeAt(r));)r++;
                continue;
            }
            let c = r, a = r;
            for(; a < o && w(t.charCodeAt(a));)a++;
            let g = t.charCodeAt(a), p, y = !1;
            if (g === 39 || g === 34 || g === 96) {
                let v = t[a], u = t.indexOf(v, a + 1), m = -1, C = -1;
                for(; u !== -1;){
                    let O = t.charCodeAt(u - 1) === 92, E = u + 1;
                    for(; E < o && !q(t.charCodeAt(E)) && w(t.charCodeAt(E));)E++;
                    if ((E === o || q(t.charCodeAt(E)) || t.charCodeAt(E) === 35) && (m = u, C = E), !O) break;
                    u = t.indexOf(v, u + 1);
                }
                if (m !== -1) {
                    if (p = t.slice(a + 1, m), r = C, t.charCodeAt(r) === 35) for(; r < o && !q(t.charCodeAt(r));)r++;
                    y = !0;
                }
            }
            if (!y) {
                let v = t.indexOf(`
`, c);
                v === -1 && (v = o);
                let u;
                if (o < 4096) u = t.indexOf("#", c), (u === -1 || u > v) && (u = v);
                else for(u = c; u < v && t.charCodeAt(u) !== 35;)u++;
                let m = c, C = u;
                for(; m < C && w(t.charCodeAt(m));)m++;
                for(; C > m && w(t.charCodeAt(C - 1));)C--;
                let O = t.charCodeAt(m);
                if (p = t.slice(m, C), p.includes("\u2028") || p.includes("\u2029") ? p = p.replace(/^(['"`])([\s\S]*)\1$/mg, "$2") : C - m >= 2 && (O === 39 || O === 34 || O === 96) && t.charCodeAt(C - 1) === O && (p = t.slice(m + 1, C - 1)), r = u, u < v) for(; r < o && !q(t.charCodeAt(r));)r++;
            }
            g === 34 && (y || a < r) && p.indexOf("\\") !== -1 && (p = p.replace(/\\n/g, `
`).replace(/\\r/g, "\r")), n[h] = p;
        }
        return n;
    }
    function se(e, n) {
        return n && $(n.fast) ? oe(e) : ne(e);
    }
    function T(e) {
        console.log(`\u2506 ${e}`);
    }
    function ie(e) {
        console.error(`\u25C7 ${e}`);
    }
    function V(e) {
        return e[0] === "~" ? I.join(Z.homedir(), e.slice(1)) : e;
    }
    function ce(e = {}) {
        let n = {
            ...e
        };
        for (let t of Object.keys(n))n[t] === void 0 && delete n[t];
        return {
            ...B(),
            ...n
        };
    }
    function ae(e) {
        e = ce(e);
        let n = I.resolve(process.cwd(), ".env"), t = "utf8", o = process.env;
        e && e.processEnv != null && (o = e.processEnv);
        let r = $(e && e.debug);
        e && e.encoding ? t = e.encoding : r && T("no encoding is specified (UTF-8 is used by default)");
        let s = [
            n
        ];
        if (e && e.path) if (!Array.isArray(e.path)) s = [
            V(e.path)
        ];
        else {
            s = [];
            for (let c of e.path)s.push(V(c));
        }
        let i, l = {}, d = {
            fast: e.fast
        };
        for (let c of s)try {
            let a = A.parse(z.readFileSync(c, {
                encoding: t
            }), d);
            A.populate(l, a, e);
        } catch (a) {
            r && T(`failed to load ${c} ${a.message}`), i = a;
        }
        let h = A.populate(o, l, e), f = $(Object.prototype.hasOwnProperty.call(e, "quiet") ? e.quiet : B(o).quiet);
        if (r || !f) {
            let c = Object.keys(h).length, a = [];
            for (let g of s)try {
                let p = I.relative(process.cwd(), g instanceof ee ? te(g) : g);
                a.push(p);
            } catch (p) {
                r && T(`failed to load ${g} ${p.message}`), i = p;
            }
            ie(`injected env (${c}) from ${a.join(",")}`);
        }
        return i ? {
            parsed: l,
            error: i
        } : {
            parsed: l
        };
    }
    function le(e) {
        return A.configDotenv(e);
    }
    function fe(e, n, t = {}) {
        let o = $(t && t.debug), r = $(t && t.override), s = {};
        if (e === null || typeof e != "object" || n === null || typeof n != "object") {
            let i = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
            throw i.code = "OBJECT_REQUIRED", i;
        }
        for (let i of Object.keys(n))Object.prototype.hasOwnProperty.call(e, i) ? (r === !0 && (e[i] = n[i], s[i] = n[i]), o && T(r === !0 ? `"${i}" is already defined and WAS overwritten` : `"${i}" is already defined and was NOT overwritten`)) : (e[i] = n[i], s[i] = n[i]);
        return s;
    }
    var A = {
        configDotenv: ae,
        config: le,
        parse: se,
        populate: fe
    };
    x.exports.configDotenv = A.configDotenv;
    x.exports.config = A.config;
    x.exports.parse = A.parse;
    x.exports.populate = A.populate;
    x.exports = A;
});
var M = j((Te, W)=>{
    var _ = __turbopack_context__.r("[externals]/child_process [external] (child_process, cjs)"), ue = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)"), L = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
    function de(e) {
        let n = [
            '"'
        ], t = 0;
        for (let o of e){
            if (o === "\\") {
                t++;
                continue;
            }
            o === '"' ? n.push("\\".repeat(t * 2 + 1), '"') : n.push("\\".repeat(t), o), t = 0;
        }
        return n.push("\\".repeat(t * 2), '"'), n.join("");
    }
    function H(e, n = 1) {
        for(let t = 0; t < n; t++){
            let o = [];
            for (let r of e){
                let s = r.charCodeAt(0), i = s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122, l = "\\/:._-".includes(r);
                !i && !l && s < 128 && o.push("^"), o.push(r);
            }
            e = o.join("");
        }
        return e;
    }
    function P(e, n) {
        let t = Object.keys(e).reverse().find((o)=>o.toUpperCase() === n);
        return t === void 0 ? void 0 : e[t];
    }
    function pe(e, n, t) {
        let o = (P(n, "PATHEXT") || ".COM;.EXE;.BAT;.CMD").split(";").filter(Boolean), s = o.some((l)=>e.toLowerCase().endsWith(l.toLowerCase())) ? [
            "",
            ...o
        ] : [
            ...o,
            ""
        ], i = /[\\/]/.test(e) ? [
            t
        ] : [
            t,
            ...(P(n, "PATH") || "").split(";")
        ];
        for (let l of i)for (let d of s){
            let h = L.resolve(t, l.replace(/^"|"$/g, ""), e + d);
            try {
                if (ue.statSync(h).isFile()) return h;
            } catch  {}
        }
    }
    function he(e, n, t) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let o = t.env || process.env, r = pe(e, o, t.cwd || process.cwd());
        if (r && /\.(?:exe|com)$/i.test(r)) return _.spawn(r, n, t);
        let s = /\.(?:bat|cmd)$/i.test(r || e), i = [
            H(L.normalize(r || e))
        ];
        for (let d of n)i.push(H(de(d), s ? 2 : 1));
        let l = i.join(" ");
        return _.spawn(P(o, "COMSPEC") || "cmd.exe", [
            "/d",
            "/v:off",
            "/s",
            "/c",
            `"${l}"`
        ], {
            ...t,
            windowsVerbatimArguments: !0
        });
    }
    W.exports = he;
});
var X = j(($e, F)=>{
    var ge = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)"), me = __turbopack_context__.r("[externals]/os [external] (os, cjs)"), Q = __turbopack_context__.r("[externals]/path [external] (path, cjs)"), ve = __turbopack_context__.r("[externals]/child_process [external] (child_process, cjs)"), Ce = M(), R = N(), { optionsFromEnv: J } = k();
    function D() {
        console.log([
            "Usage: dotenv run [--help] [-q|--quiet] [--debug] [--override] [--fast] [-f|--file <paths>] [--] <command> [args...]",
            "",
            "Run a command with environment variables from a .env file.",
            "Place dotenv options before the command; all following arguments go to the command.",
            "",
            "Options:",
            "  -f, --file <paths>  .env paths, comma-separated or repeated (default: .env)",
            "  -q, --quiet suppress the injected env message",
            "  --debug     enable debug logging",
            "  --override  override existing environment variables",
            "  --fast      use the faster character-scanner parser",
            "",
            "Environment variables (DOTENV_CONFIG_* names remain as fallbacks):",
            "  DOTENV_PATH, DOTENV_ENCODING, DOTENV_QUIET,",
            "  DOTENV_DEBUG, DOTENV_OVERRIDE,",
            "  DOTENV_FAST"
        ].join(`
`));
    }
    function we(e) {
        let n = [], t = !1, o, r, s, i, l = -1;
        for(let h = 0; h < e.length; h++){
            let f = e[h];
            if (f === "--") {
                l = h + 1;
                break;
            }
            if (f === "--help" || f === "-h") return {
                help: !0
            };
            if (f === "--quiet" || f === "-q") {
                o = !0;
                continue;
            }
            if (f === "--debug") {
                r = !0;
                continue;
            }
            if (f === "--override") {
                s = !0;
                continue;
            }
            if (f === "--fast") {
                i = !0;
                continue;
            }
            if (f === "-f" || f === "--file" || f.startsWith("-f=") || f.startsWith("--file=")) {
                let c = f.indexOf("="), a = c === -1 ? f : f.slice(0, c), g = c === -1 ? e[++h] : f.slice(c + 1);
                if (!g || g === "--") return {
                    error: `${a} requires a path`
                };
                let p = g.split(",").map((y)=>y.trim()).filter(Boolean);
                if (p.length === 0) return {
                    error: `${a} requires a path`
                };
                n.push(...p), t = !0;
                continue;
            }
            if (f.startsWith("-")) return {
                error: `unknown option: ${f}`
            };
            l = h;
            break;
        }
        let d = l === -1 ? [] : e.slice(l);
        return {
            paths: n,
            pathSet: t,
            quiet: o,
            debug: r,
            override: s,
            fast: i,
            command: d
        };
    }
    function Ae(e) {
        return e[0] === "~" ? Q.join(me.homedir(), e.slice(1)) : e;
    }
    function Ee(e) {
        let n = J(), t = {
            encoding: n.encoding || "utf8",
            quiet: n.quiet,
            debug: n.debug === !0,
            override: n.override === !0,
            fast: n.fast === !0,
            paths: [
                ".env"
            ],
            defaultPath: !0
        };
        return n.path != null && (t.paths = [
            n.path
        ], t.defaultPath = !1), e.pathSet && (t.paths = e.paths, t.defaultPath = !1), e.quiet != null && (t.quiet = e.quiet), e.debug != null && (t.debug = e.debug), e.override != null && (t.override = e.override), e.fast != null && (t.fast = e.fast), t;
    }
    function be(e) {
        let n = {}, t = [], o = {
            override: e.override,
            debug: e.debug
        };
        for (let s of e.paths){
            let i = Q.resolve(process.cwd(), Ae(s));
            try {
                let l = R.parse(ge.readFileSync(i, {
                    encoding: e.encoding
                }), {
                    fast: e.fast
                });
                R.populate(n, l, o), t.push(s);
            } catch (l) {
                if (e.debug && console.log(`\u2506 failed to load ${s} ${l.message}`), !(e.defaultPath && l.code === "ENOENT")) throw l;
            }
        }
        return {
            injected: R.populate(process.env, n, o),
            loadedPaths: t
        };
    }
    function K(e) {
        let n = e[0];
        if (n === "--help" || n === "-h") {
            D();
            return;
        }
        if (n !== "run") {
            D(), process.exitCode = 1;
            return;
        }
        let t = we(e.slice(1));
        if (t.help) {
            D();
            return;
        }
        if (t.error) {
            console.error(`dotenv: ${t.error}`), D(), process.exitCode = 1;
            return;
        }
        if (t.command.length === 0) {
            D(), process.exitCode = 1;
            return;
        }
        let o = Ee(t);
        try {
            let c = be(o);
            if (!(o.quiet == null ? J().quiet : o.quiet)) {
                let g = `\u25C7 injected env (${Object.keys(c.injected).length})`;
                c.loadedPaths.length > 0 && (g += ` from ${c.loadedPaths.join(", ")}`), console.error(g);
            }
        } catch (c) {
            console.error(`dotenv: ${c.message}`), process.exitCode = 1;
            return;
        }
        let r = !!process.stdin.isTTY, s = process.platform !== "win32" && !r, i = Ce(t.command[0], t.command.slice(1), {
            stdio: "inherit",
            detached: s
        }), l = new Map, d = 0;
        function h(c) {
            if (!(!i.pid || i.exitCode !== null || i.signalCode !== null)) {
                if ("TURBOPACK compile-time truthy", 1) {
                    ve.spawnSync("taskkill", [
                        "/pid",
                        String(i.pid),
                        "/T",
                        "/F"
                    ], {
                        stdio: "ignore"
                    });
                    return;
                }
                //TURBOPACK unreachable
                ;
            }
        }
        function f() {
            for (let [c, a] of l)process.removeListener(c, a);
        }
        for (let c of [
            "SIGINT",
            "SIGTERM",
            "SIGHUP",
            "SIGQUIT"
        ]){
            let a = ()=>{
                if (c === "SIGINT") {
                    if (d++, r && process.platform !== "win32" && d === 1) return;
                    if (d > 1) {
                        h(d === 2 ? "SIGTERM" : "SIGKILL");
                        return;
                    }
                }
                h(c);
            };
            l.set(c, a), process.on(c, a);
        }
        i.on("error", function(c) {
            f(), console.error(`dotenv: ${c.message}`), process.exitCode = 1;
        }), i.on("exit", function(c, a) {
            f(), typeof c == "number" ? process.exit(c) : (setInterval(()=>{}, 1e3), process.kill(process.pid, a));
        });
    }
    F.exports = K;
    /*TURBOPACK member replacement*/ __turbopack_context__.t.main === F && K(process.argv.slice(2));
});
var S = N(), qe = X();
module.exports = S;
module.exports.config = S.config;
module.exports.configDotenv = S.configDotenv;
module.exports.parse = S.parse;
module.exports.populate = S.populate;
/*TURBOPACK member replacement*/ __turbopack_context__.t.main === module && qe(process.argv.slice(2));
}),
"[project]/node_modules/ms/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/node_modules/whatwg-encoding/lib/labels-to-names.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "866": "IBM866",
    "unicode-1-1-utf-8": "UTF-8",
    "unicode11utf8": "UTF-8",
    "unicode20utf8": "UTF-8",
    "utf-8": "UTF-8",
    "utf8": "UTF-8",
    "x-unicode20utf8": "UTF-8",
    "cp866": "IBM866",
    "csibm866": "IBM866",
    "ibm866": "IBM866",
    "csisolatin2": "ISO-8859-2",
    "iso-8859-2": "ISO-8859-2",
    "iso-ir-101": "ISO-8859-2",
    "iso8859-2": "ISO-8859-2",
    "iso88592": "ISO-8859-2",
    "iso_8859-2": "ISO-8859-2",
    "iso_8859-2:1987": "ISO-8859-2",
    "l2": "ISO-8859-2",
    "latin2": "ISO-8859-2",
    "csisolatin3": "ISO-8859-3",
    "iso-8859-3": "ISO-8859-3",
    "iso-ir-109": "ISO-8859-3",
    "iso8859-3": "ISO-8859-3",
    "iso88593": "ISO-8859-3",
    "iso_8859-3": "ISO-8859-3",
    "iso_8859-3:1988": "ISO-8859-3",
    "l3": "ISO-8859-3",
    "latin3": "ISO-8859-3",
    "csisolatin4": "ISO-8859-4",
    "iso-8859-4": "ISO-8859-4",
    "iso-ir-110": "ISO-8859-4",
    "iso8859-4": "ISO-8859-4",
    "iso88594": "ISO-8859-4",
    "iso_8859-4": "ISO-8859-4",
    "iso_8859-4:1988": "ISO-8859-4",
    "l4": "ISO-8859-4",
    "latin4": "ISO-8859-4",
    "csisolatincyrillic": "ISO-8859-5",
    "cyrillic": "ISO-8859-5",
    "iso-8859-5": "ISO-8859-5",
    "iso-ir-144": "ISO-8859-5",
    "iso8859-5": "ISO-8859-5",
    "iso88595": "ISO-8859-5",
    "iso_8859-5": "ISO-8859-5",
    "iso_8859-5:1988": "ISO-8859-5",
    "arabic": "ISO-8859-6",
    "asmo-708": "ISO-8859-6",
    "csiso88596e": "ISO-8859-6",
    "csiso88596i": "ISO-8859-6",
    "csisolatinarabic": "ISO-8859-6",
    "ecma-114": "ISO-8859-6",
    "iso-8859-6": "ISO-8859-6",
    "iso-8859-6-e": "ISO-8859-6",
    "iso-8859-6-i": "ISO-8859-6",
    "iso-ir-127": "ISO-8859-6",
    "iso8859-6": "ISO-8859-6",
    "iso88596": "ISO-8859-6",
    "iso_8859-6": "ISO-8859-6",
    "iso_8859-6:1987": "ISO-8859-6",
    "csisolatingreek": "ISO-8859-7",
    "ecma-118": "ISO-8859-7",
    "elot_928": "ISO-8859-7",
    "greek": "ISO-8859-7",
    "greek8": "ISO-8859-7",
    "iso-8859-7": "ISO-8859-7",
    "iso-ir-126": "ISO-8859-7",
    "iso8859-7": "ISO-8859-7",
    "iso88597": "ISO-8859-7",
    "iso_8859-7": "ISO-8859-7",
    "iso_8859-7:1987": "ISO-8859-7",
    "sun_eu_greek": "ISO-8859-7",
    "csiso88598e": "ISO-8859-8",
    "csisolatinhebrew": "ISO-8859-8",
    "hebrew": "ISO-8859-8",
    "iso-8859-8": "ISO-8859-8",
    "iso-8859-8-e": "ISO-8859-8",
    "iso-ir-138": "ISO-8859-8",
    "iso8859-8": "ISO-8859-8",
    "iso88598": "ISO-8859-8",
    "iso_8859-8": "ISO-8859-8",
    "iso_8859-8:1988": "ISO-8859-8",
    "visual": "ISO-8859-8",
    "csisolatin6": "ISO-8859-10",
    "iso-8859-10": "ISO-8859-10",
    "iso-ir-157": "ISO-8859-10",
    "iso8859-10": "ISO-8859-10",
    "iso885910": "ISO-8859-10",
    "l6": "ISO-8859-10",
    "latin6": "ISO-8859-10",
    "iso-8859-13": "ISO-8859-13",
    "iso8859-13": "ISO-8859-13",
    "iso885913": "ISO-8859-13",
    "iso-8859-14": "ISO-8859-14",
    "iso8859-14": "ISO-8859-14",
    "iso885914": "ISO-8859-14",
    "csisolatin9": "ISO-8859-15",
    "iso-8859-15": "ISO-8859-15",
    "iso8859-15": "ISO-8859-15",
    "iso885915": "ISO-8859-15",
    "iso_8859-15": "ISO-8859-15",
    "l9": "ISO-8859-15",
    "iso-8859-16": "ISO-8859-16",
    "cskoi8r": "KOI8-R",
    "koi": "KOI8-R",
    "koi8": "KOI8-R",
    "koi8-r": "KOI8-R",
    "koi8_r": "KOI8-R",
    "koi8-ru": "KOI8-U",
    "koi8-u": "KOI8-U",
    "csmacintosh": "macintosh",
    "mac": "macintosh",
    "macintosh": "macintosh",
    "x-mac-roman": "macintosh",
    "dos-874": "windows-874",
    "iso-8859-11": "windows-874",
    "iso8859-11": "windows-874",
    "iso885911": "windows-874",
    "tis-620": "windows-874",
    "windows-874": "windows-874",
    "cp1250": "windows-1250",
    "windows-1250": "windows-1250",
    "x-cp1250": "windows-1250",
    "cp1251": "windows-1251",
    "windows-1251": "windows-1251",
    "x-cp1251": "windows-1251",
    "ansi_x3.4-1968": "windows-1252",
    "ascii": "windows-1252",
    "cp1252": "windows-1252",
    "cp819": "windows-1252",
    "csisolatin1": "windows-1252",
    "ibm819": "windows-1252",
    "iso-8859-1": "windows-1252",
    "iso-ir-100": "windows-1252",
    "iso8859-1": "windows-1252",
    "iso88591": "windows-1252",
    "iso_8859-1": "windows-1252",
    "iso_8859-1:1987": "windows-1252",
    "l1": "windows-1252",
    "latin1": "windows-1252",
    "us-ascii": "windows-1252",
    "windows-1252": "windows-1252",
    "x-cp1252": "windows-1252",
    "cp1253": "windows-1253",
    "windows-1253": "windows-1253",
    "x-cp1253": "windows-1253",
    "cp1254": "windows-1254",
    "csisolatin5": "windows-1254",
    "iso-8859-9": "windows-1254",
    "iso-ir-148": "windows-1254",
    "iso8859-9": "windows-1254",
    "iso88599": "windows-1254",
    "iso_8859-9": "windows-1254",
    "iso_8859-9:1989": "windows-1254",
    "l5": "windows-1254",
    "latin5": "windows-1254",
    "windows-1254": "windows-1254",
    "x-cp1254": "windows-1254",
    "cp1255": "windows-1255",
    "windows-1255": "windows-1255",
    "x-cp1255": "windows-1255",
    "cp1256": "windows-1256",
    "windows-1256": "windows-1256",
    "x-cp1256": "windows-1256",
    "cp1257": "windows-1257",
    "windows-1257": "windows-1257",
    "x-cp1257": "windows-1257",
    "cp1258": "windows-1258",
    "windows-1258": "windows-1258",
    "x-cp1258": "windows-1258",
    "chinese": "GBK",
    "csgb2312": "GBK",
    "csiso58gb231280": "GBK",
    "gb2312": "GBK",
    "gb_2312": "GBK",
    "gb_2312-80": "GBK",
    "gbk": "GBK",
    "iso-ir-58": "GBK",
    "x-gbk": "GBK",
    "gb18030": "gb18030",
    "big5": "Big5",
    "big5-hkscs": "Big5",
    "cn-big5": "Big5",
    "csbig5": "Big5",
    "x-x-big5": "Big5",
    "cseucpkdfmtjapanese": "EUC-JP",
    "euc-jp": "EUC-JP",
    "x-euc-jp": "EUC-JP",
    "csshiftjis": "Shift_JIS",
    "ms932": "Shift_JIS",
    "ms_kanji": "Shift_JIS",
    "shift-jis": "Shift_JIS",
    "shift_jis": "Shift_JIS",
    "sjis": "Shift_JIS",
    "windows-31j": "Shift_JIS",
    "x-sjis": "Shift_JIS",
    "cseuckr": "EUC-KR",
    "csksc56011987": "EUC-KR",
    "euc-kr": "EUC-KR",
    "iso-ir-149": "EUC-KR",
    "korean": "EUC-KR",
    "ks_c_5601-1987": "EUC-KR",
    "ks_c_5601-1989": "EUC-KR",
    "ksc5601": "EUC-KR",
    "ksc_5601": "EUC-KR",
    "windows-949": "EUC-KR",
    "unicodefffe": "UTF-16BE",
    "utf-16be": "UTF-16BE",
    "csunicode": "UTF-16LE",
    "iso-10646-ucs-2": "UTF-16LE",
    "ucs-2": "UTF-16LE",
    "unicode": "UTF-16LE",
    "unicodefeff": "UTF-16LE",
    "utf-16": "UTF-16LE",
    "utf-16le": "UTF-16LE",
    "x-user-defined": "x-user-defined"
};
}),
"[project]/node_modules/whatwg-encoding/lib/supported-names.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    "UTF-8",
    "IBM866",
    "ISO-8859-2",
    "ISO-8859-3",
    "ISO-8859-4",
    "ISO-8859-5",
    "ISO-8859-6",
    "ISO-8859-7",
    "ISO-8859-8",
    "ISO-8859-10",
    "ISO-8859-13",
    "ISO-8859-14",
    "ISO-8859-15",
    "ISO-8859-16",
    "KOI8-R",
    "KOI8-U",
    "macintosh",
    "windows-874",
    "windows-1250",
    "windows-1251",
    "windows-1252",
    "windows-1253",
    "windows-1254",
    "windows-1255",
    "windows-1256",
    "windows-1257",
    "windows-1258",
    "GBK",
    "gb18030",
    "Big5",
    "EUC-JP",
    "Shift_JIS",
    "EUC-KR",
    "UTF-16BE",
    "UTF-16LE",
    "x-user-defined"
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__138cws095-a4w._.js.map