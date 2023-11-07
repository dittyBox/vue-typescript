import {idName} from '@/types/common'

// localStorage 가져오기
export function getLocalstorage(id: string){
  let name: string = "";
  name = window.localStorage.getItem(id) || "";
  return name;
}

// localStorage 저장하기
export function setLocalstorage(idName: idName){
  window.localStorage.setItem(idName.id,idName.name);
}
