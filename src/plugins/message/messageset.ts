
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

const messageSet = async (keys: IMessageSet): Promise<IMessageSet> => {
  try {
    const response = await postData<IMessageSet>('/common/AjaxStoredQuery', keys);
    // 성공했을 경우
    //console.log("성공", JSON.parse(response["MOMProResult"]));
    //return JSON.parse(response["MOMProResult"]);
    debugger;
    console.log(response);
    const createdUser = response.result;
    console.log(createdUser);
    return createdUser;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create user');
  }
};

export default messageSet;
