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

android hooking watch class_method android.content.Context.getSystemService --dump-args -–dump-backtrace
* Hook 特定方法
android hooking watch class_method com.example.app.Classname.methodName --dump-args --dump-return -–dump-backtrace

android hooking watch class_method java.util.IdentityHashMap.put --dump-args
android hooking watch class_method java.util.IdentityHashMap.putAll --dump-args

android hooking watch class_method org.json.JSONObject.put --dump-args -–dump-backtrace

android hooking watch class android.view.autofill.AutofillManager --dump-args -–dump-backtrace

## 内存搜索

memory search "simulator"  --string


* 取消观察
android hooking unwatch class 
android hooking unwatch class_method 

# 方法1：使用 jobs 命令
jobs list      # 列出所有活跃的 Hook
jobs kill all  # 取消所有 Hook