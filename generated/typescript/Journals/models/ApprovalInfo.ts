/**
 * GL Journal Events API
 * API for general ledger journal entries including headers and line items
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApprovalInfoApproversInner } from '../models/ApprovalInfoApproversInner';
export class ApprovalInfo {
    'approvalStatus': ApprovalInfoApprovalStatusEnum;
    'requiredLevels': number;
    'currentLevel'?: number;
    'approvers'?: Array<ApprovalInfoApproversInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "approvalStatus",
            "baseName": "approvalStatus",
            "type": "ApprovalInfoApprovalStatusEnum",
            "format": ""
        },
        {
            "name": "requiredLevels",
            "baseName": "requiredLevels",
            "type": "number",
            "format": ""
        },
        {
            "name": "currentLevel",
            "baseName": "currentLevel",
            "type": "number",
            "format": ""
        },
        {
            "name": "approvers",
            "baseName": "approvers",
            "type": "Array<ApprovalInfoApproversInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApprovalInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ApprovalInfoApprovalStatusEnum {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}

