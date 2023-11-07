

export interface IHashTable {
  AUTHTOKEN: string ,
  ENDPAGE: number ,
  AUTHID: string ,
  REQUESTTYPE: string ,
  DIVISIONCD: string ,
  SITECD: string ,
  DATASET: any ,
  STARTPAGE: number ,
  ERRCODE: string ,
  CUSTOMERTYPE: string ,
  PAGEID: string ,
  LOCALE: string ,
  QUERYCLASSID: string ,
  QUERYID: string ,
  QUERYVERSION: string ,
  ERRMSG: string ,
  BIZ_CONDITION: string ,
  PRODUCT: string ,
  USERID: string ,
}

export interface IStoredQuery{
  CLASSID: string ,
  ID: string ,
  VERSION: string ,
}

export interface IMessageSet {
  REQUESTTYPE: string,
  SITEID: string,
  DATASET: any,
  HASHTABLE: IHashTable,
  STOREDQUERY: IStoredQuery,
  USERIP: string,
  MESSAGE: any,
  EXCEPTIONMESSAGE: any,
  LOCALE: string,
  USERID: string,
  COMMAND: string,
  ISSUCCESS: boolean,
  ACTIONID: string,
};