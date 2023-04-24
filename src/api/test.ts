import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

//测试API test1
export const getTest = () => { 
  return http.request<any>("get", baseUrlApi("api/test1"))
}

//test2
export const getTest2 = (params?: object) => { 
  return http.request("get", baseUrlApi("api/test2"), { params })
}