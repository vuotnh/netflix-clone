import mapKeys from 'lodash/mapKeys';
import isPlainObject from 'lodash/isPlainObject';
import trim from 'lodash/trim';
import moment from 'moment';
import { ElNotification } from 'element-plus';

export function isJson(str: string): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}