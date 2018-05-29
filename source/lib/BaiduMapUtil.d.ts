interface BaiduMapUtil {
    //坐标转换
    convertToBd09ll(srcJson: Object, callFunction: Function): void;//将gcj02/wgs84转换为bd09ll百度坐标系
    convertToGcj02(jsonData: Object, callBackFun: Function): void;//将bd09ll/wgs84转换为gcj02国测坐标系
    //地理编码转换
    geocode(jsonData: Object, callBackFun: Function): void;// 根据地址查询百度地图坐标系经纬度
    reverseGeocode(jsonData: Object, callBackFun: Function): void;//根据经纬度获取地址详细信息
    reverseGeocode(jsonData: Object, callBackFun: Function): void;//根据经纬度获取地址详细信息
    //Poi搜索
    searchInCity(jsonData: Object, callFunction: Function): void;//百度地图市内搜索
    searchInBounds(jsonData: Object, callFunction: Function): void;//百度地图矩形区域内搜索
    searchNearBy(jsonData: Object, callFunction: Function): void;//百度地图圆形区域内搜索
    //其他
    getDistance(startJson: Object, endJson: Object): number;//计算两点间实际地理距离

    // **调用百度地图导航**
    openBaiduMapNavi(jsonData: Object): void;  //调起百度地图应用导航页面
    openBaiduMapWalkNavi(jsonData: Object): void; //调起百度地图应用步行导航页面
    openBaiduMapWalkNaviAR(jsonData: Object): void; //调起百度地图应用步行AR导航页面
    openBaiduMapBikeNavi(jsonData: Object): void; //调起百度地图应用骑行导航页面
    //**调用百度地图路线规划**
    openBaiduMapDrivingRoute(jsonData: Object): boolean;  //调起百度地图应用公交路线检索页面
    openBaiduMapWalkingRoute(jsonData: Object): boolean;  //调起百度地图步行路线检索页面
    //**调用百度地图POI搜索**
    openBaiduMapPoiNearbySearch(jsonData: Object): boolean  //调起百度地图poi周边检索页面
    openBaiduMapPoiDetialsPage(jsonData: Object): boolean  //调起百度地图poi详情页面
    openBaiduMapPanoShow(jsonData: Object): boolean   //调起百度地图poi全景展示页面

    //百度路径规划查询
    searchTransitRoute(jsonData: Object, callback: Function): void; //获取公交路径规划
    searchDrivingRoute(jsonData: Object, callback: Function): void;//获取驾车路径规划
    searchWalkingRoute(jsonData: Object, callback: Function): void;//获取步行路径规划
    searchBikingRoute(jsonData: Object, callback: Function): void;//获取骑行路径规划





}

declare module 'BaiduMapUtil' {
    export = baiduMapUtil;
}

var baiduMapUtil: BaiduMapUtil;




