
interface ListAdapter {
   refresh(): void; //刷新数据并通知list容器更新
   notifyItemRangeInserted(jsonData:Object): void ;//插入列表数据后通知list容器局部刷新
   notifyItemRangeChanged(jsonData:Object): void ;//更新列表数据后通知list容器局部刷新
   notifyItemRangeRemoved (jsonData:Object): void;// 移除列表数据后通知list容器局部刷新
}



declare module 'ListAdapter' {
    export = listadapter;
}

var listadapter: ListAdapter;




