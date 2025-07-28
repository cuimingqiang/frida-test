## frida 部署
Frida 16.7.4
frida-server-16.1.10-android-arm64

## 直接启动
frida -U -f pkg -l 脚本.js -o 日子.txt

## 附加启动
frida -U -p pid -l 脚本.js -o 日子.txt

## 工程
frida -U -p 9910 -l libz.js -o libz.txt

frida -U -f com.sytt.tzy -l game.js -o log3.txt

## [objection](https://github.com/sensepost/objection/wiki/Using-objection)
* 进入探险模式 
objection -g com.jingdong.app.mall explore

            com.snapchat.android
objection -g com.sytt.tzy explore
* 搜索某类的实例
android heap search instances android.app.Dialog
* 执行方法
android heap execute com.example.app.Classname methodName

* 列出所有类
android hooking list classes
android hooking list classes --grep "okhttp"

android hooking search classes "Http"

org.json.JSONObject
org.json.JSONArray

* 特定类的方法
android hooking watch class com.example.app.Classname
android hooking watch class android.view.inputmethod.InputMethodManager
android hooking watch class android.view.inputmethod.InputMethodInfo
android hooking watch class android.os.ServiceManager --dump-args -–dump-backtrace
android hooking watch class android.content.pm.PackageManager --dump-args --dump-return -–dump-backtrace

android hooking watch class_method android.content.Context.getSystemService --dump-args -–dump-backtrace
* Hook 特定方法
android hooking watch class_method com.example.app.Classname.methodName --dump-args --dump-return -–dump-backtrace

android hooking watch class_method java.util.IdentityHashMap.put --dump-args
android hooking watch class_method java.util.IdentityHashMap.putAll --dump-args

android hooking watch class_method org.json.JSONObject.put --dump-args -–dump-backtrace

android hooking watch class android.view.autofill.AutofillManager --dump-args -–dump-backtrace

android hooking watch class_method android.os.ServiceManager.getService --dump-args --dump-return -–dump-backtrace
android hooking watch class_method android.content.pm.PackageManager.getPackageInfoAsUserUncached --dump-args --dump-return -–dump-backtrace

android hooking watch class_method android.os.SystemProperties.get --dump-args --dump-return -–dump-backtrace

android hooking watch class_method android.os.Parcel.readString8 --dump-args --dump-return -–dump-backtrace
android.content.pm.ApplicationInfo.
## 内存搜索

memory search "simulator"  --string
memory search "请联系客服"  --string

* 取消观察
android hooking unwatch class 
android hooking unwatch class_method 

# 方法1：使用 jobs 命令
jobs list      # 列出所有活跃的 Hook
jobs kill all  # 取消所有 Hook

## 轻量级跟踪
frida-trace -U -i "open" -F com.sytt.tzy
* 多个
frida-trace -U -i "open" -i "read" -i "write" -i "close" -F com.sytt.tzy
frida-trace -U -i "__system_property_find" -F com.sytt.tzy
  ``` c++
  defineHandler({
    onEnter(log, args, state) {
      this.key = args[0].readCString();
      // log('__system_property_find()',args[0].readCString());
    },

    onLeave(log, retval, state) {
      log('__system_property_find kye=', this.key)
      if(retval != null){
          log('value=', (retval.add(4)).readCString())
      }
    }
  });
```
frida-trace -U -i "stat*" -i "access*" -f com.sytt.tzy > trace.log
frida-trace -U -i "memcpy" -f com.sytt.tzy > trace.log

* 模糊匹配
frida-trace -U -i "*file*" -i "*open*" -i "*read*" -i "*write*" -F com.sytt.tzy
* 跟踪特定库
frida-trace -U -n com.sytt.tzy -I "libc.so" -i "open" -i "fopen"
* 跟踪JNI
frida-trace -U -n com.sytt.tzy -i "Java_*"
frida-trace -U -F com.sytt.tzy -i "com.unity3d.player.UnityPlayer_*"

* 案列
frida-trace -U \
  -i "open" -i "read" -i "write" \
  -i "malloc" -i "free" \
  -i "socket" -i "connect" \
  -F com.sytt.tzy \
  -o multi_trace.log