import { createI18n } from 'vue-i18n'
import {IMessageSet} from '@/types/messageset-type'
import { postData } from '@/api'

const keys: IMessageSet = {
  REQUESTTYPE: '',
  SITEID: 'NH',
  DATASET: {
    WEBDATA: {
      LOCALE: "",
      CODE: "",
      NAME: "",
      SERVICE: "",
    }
  },
  HASHTABLE: {
    AUTHTOKEN: '',
    ENDPAGE: 1000000000,
    AUTHID: '999',
    REQUESTTYPE: '',
    DIVISIONCD: 'THiRA',
    SITECD: 'NH',
    DATASET: {
      WEBDATA: {
        LOCALE: "",
        CODE: "",
        NAME: "",
        SERVICE: "",
      }
    },
    STARTPAGE: 1,
    ERRCODE: '',
    CUSTOMERTYPE: '',
    PAGEID: '',
    LOCALE: 'KR',
    QUERYCLASSID: 'COMMONTOOL',
    QUERYID: 'GetMultiLanguageList',
    QUERYVERSION: '001',
    ERRMSG: '',
    BIZ_CONDITION: 'GetMultiLanguageList',
    PRODUCT: 'MOMPRO',
    USERID: ''
  },
  STOREDQUERY: {
    CLASSID: 'COMMONTOOL',
    ID: 'GetMultiLanguageList',
    VERSION: '001'
  },
  USERIP: '0:0:0:0',
  MESSAGE: null,
  EXCEPTIONMESSAGE: null,
  LOCALE: 'KR',
  USERID: '',
  COMMAND: 'common/AjaxStoredQuery',
  ISSUCCESS: false,
  ACTIONID: 'common/AjaxStoredQuery.COMMONTOOL.GetMultiLanguageList.001?CUSTOMERTYPE= '
}

const setI18n = async (): Promise<any> => {
try {
  const response: any = await postData<any>('/common/AjaxStoredQuery', keys);

  const allLang = JSON.parse(response["MOMProResult"]).DATATABLE;
  const messages: any = {};
  allLang.map((e: any) => {
    e.LOCALE = e.LOCALE == "KR" ? "ko" : e.LOCALE;
    if (Object.keys(messages).includes(e.LOCALE)) {
      messages[e.LOCALE][e.CODE] = e.NAME;
    } else {
      messages[e.LOCALE] = {};
      messages[e.LOCALE][e.CODE] = e.NAME;
    }
    return e;
  })
  return createI18n({
    locale: 'ko', // 기본 locale
   fallbackLocale: 'ko',
   messages
  });
} catch (error) {
  console.error(error);
  throw new Error('Failed to create user');
}

};

export default setI18n;