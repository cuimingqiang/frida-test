const JNINativeInterface = [
    'reserved0',
    'reserved1',
    'reserved2',
    'reserved3',
    'GetVersion',
    'DefineClass',
    'FindClass',
    'FromReflectedMethod',
    'FromReflectedField',
    'ToReflectedMethod',
    'GetSuperclass',
    'IsAssignableFrom',
    'ToReflectedField',
    'Throw',
    'ThrowNew',
    'ExceptionOccurred',
    'ExceptionDescribe',
    'ExceptionClear',
    'FatalError',
    'PushLocalFrame',
    'PopLocalFrame',
    'NewGlobalRef',
    'DeleteGlobalRef',
    'DeleteLocalRef',
    'IsSameObject',
    'NewLocalRef',
    'EnsureLocalCapacity',
    'AllocObject',
    'NewObject',
    'NewObjectV',
    'NewObjectA',
    'GetObjectClass',
    'IsInstanceOf',
    'GetMethodID',
    'CallObjectMethod',
    'CallObjectMethodV',
    'CallObjectMethodA',
    'CallBooleanMethod',
    'CallBooleanMethodV',
    'CallBooleanMethodA',
    'CallByteMethod',
    'CallByteMethodV',
    'CallByteMethodA',
    'CallCharMethod',
    'CallCharMethodV',
    'CallCharMethodA',
    'CallShortMethod',
    'CallShortMethodV',
    'CallShortMethodA',
    'CallIntMethod',
    'CallIntMethodV',
    'CallIntMethodA',
    'CallLongMethod',
    'CallLongMethodV',
    'CallLongMethodA',
    'CallFloatMethod',
    'CallFloatMethodV',
    'CallFloatMethodA',
    'CallDoubleMethod',
    'CallDoubleMethodV',
    'CallDoubleMethodA',
    'CallVoidMethod',
    'CallVoidMethodV',
    'CallVoidMethodA',
    'CallNonvirtualObjectMethod',
    'CallNonvirtualObjectMethodV',
    'CallNonvirtualObjectMethodA',
    'CallNonvirtualBooleanMethod',
    'CallNonvirtualBooleanMethodV',
    'CallNonvirtualBooleanMethodA',
    'CallNonvirtualByteMethod',
    'CallNonvirtualByteMethodV',
    'CallNonvirtualByteMethodA',
    'CallNonvirtualCharMethod',
    'CallNonvirtualCharMethodV',
    'CallNonvirtualCharMethodA',
    'CallNonvirtualShortMethod',
    'CallNonvirtualShortMethodV',
    'CallNonvirtualShortMethodA',
    'CallNonvirtualIntMethod',
    'CallNonvirtualIntMethodV',
    'CallNonvirtualIntMethodA',
    'CallNonvirtualLongMethod',
    'CallNonvirtualLongMethodV',
    'CallNonvirtualLongMethodA',
    'CallNonvirtualFloatMethod',
    'CallNonvirtualFloatMethodV',
    'CallNonvirtualFloatMethodA',
    'CallNonvirtualDoubleMethod',
    'CallNonvirtualDoubleMethodV',
    'CallNonvirtualDoubleMethodA',
    'CallNonvirtualVoidMethod',
    'CallNonvirtualVoidMethodV',
    'CallNonvirtualVoidMethodA',
    'GetFieldID',
    'GetObjectField',
    'GetBooleanField',
    'GetByteField',
    'GetCharField',
    'GetShortField',
    'GetIntField',
    'GetLongField',
    'GetFloatField',
    'GetDoubleField',
    'SetObjectField',
    'SetBooleanField',
    'SetByteField',
    'SetCharField',
    'SetShortField',
    'SetIntField',
    'SetLongField',
    'SetFloatField',
    'SetDoubleField',
    'GetStaticMethodID',
    'CallStaticObjectMethod',
    'CallStaticObjectMethodV',
    'CallStaticObjectMethodA',
    'CallStaticBooleanMethod',
    'CallStaticBooleanMethodV',
    'CallStaticBooleanMethodA',
    'CallStaticByteMethod',
    'CallStaticByteMethodV',
    'CallStaticByteMethodA',
    'CallStaticCharMethod',
    'CallStaticCharMethodV',
    'CallStaticCharMethodA',
    'CallStaticShortMethod',
    'CallStaticShortMethodV',
    'CallStaticShortMethodA',
    'CallStaticIntMethod',
    'CallStaticIntMethodV',
    'CallStaticIntMethodA',
    'CallStaticLongMethod',
    'CallStaticLongMethodV',
    'CallStaticLongMethodA',
    'CallStaticFloatMethod',
    'CallStaticFloatMethodV',
    'CallStaticFloatMethodA',
    'CallStaticDoubleMethod',
    'CallStaticDoubleMethodV',
    'CallStaticDoubleMethodA',
    'CallStaticVoidMethod',
    'CallStaticVoidMethodV',
    'CallStaticVoidMethodA',
    'GetStaticFieldID',
    'GetStaticObjectField',
    'GetStaticBooleanField',
    'GetStaticByteField',
    'GetStaticCharField',
    'GetStaticShortField',
    'GetStaticIntField',
    'GetStaticLongField',
    'GetStaticFloatField',
    'GetStaticDoubleField',
    'SetStaticObjectField',
    'SetStaticBooleanField',
    'SetStaticByteField',
    'SetStaticCharField',
    'SetStaticShortField',
    'SetStaticIntField',
    'SetStaticLongField',
    'SetStaticFloatField',
    'SetStaticDoubleField',
    'NewString',
    'GetStringLength',
    'GetStringChars',
    'ReleaseStringChars',
    'NewStringUTF',
    'GetStringUTFLength',
    'GetStringUTFChars',
    'ReleaseStringUTFChars',
    'GetArrayLength',
    'NewObjectArray',
    'GetObjectArrayElement',
    'SetObjectArrayElement',
    'NewBooleanArray',
    'NewByteArray',
    'NewCharArray',
    'NewShortArray',
    'NewIntArray',
    'NewLongArray',
    'NewFloatArray',
    'NewDoubleArray',
    'GetBooleanArrayElements',
    'GetByteArrayElements',
    'GetCharArrayElements',
    'GetShortArrayElements',
    'GetIntArrayElements',
    'GetLongArrayElements',
    'GetFloatArrayElements',
    'GetDoubleArrayElements',
    'ReleaseBooleanArrayElements',
    'ReleaseByteArrayElements',
    'ReleaseCharArrayElements',
    'ReleaseShortArrayElements',
    'ReleaseIntArrayElements',
    'ReleaseLongArrayElements',
    'ReleaseFloatArrayElements',
    'ReleaseDoubleArrayElements',
    'GetBooleanArrayRegion',
    'GetByteArrayRegion',
    'GetCharArrayRegion',
    'GetShortArrayRegion',
    'GetIntArrayRegion',
    'GetLongArrayRegion',
    'GetFloatArrayRegion',
    'GetDoubleArrayRegion',
    'SetBooleanArrayRegion',
    'SetByteArrayRegion',
    'SetCharArrayRegion',
    'SetShortArrayRegion',
    'SetIntArrayRegion',
    'SetLongArrayRegion',
    'SetFloatArrayRegion',
    'SetDoubleArrayRegion',
    'RegisterNatives',
    'UnregisterNatives',
    'MonitorEnter',
    'MonitorExit',
    'GetJavaVM',
    'GetStringRegion',
    'GetStringUTFRegion',
    'GetPrimitiveArrayCritical',
    'ReleasePrimitiveArrayCritical',
    'GetStringCritical',
    'ReleaseStringCritical',
    'NewWeakGlobalRef',
    'DeleteWeakGlobalRef',
    'ExceptionCheck',
    'NewDirectByteBuffer',
    'GetDirectBufferAddress',
    'GetDirectBufferCapacity',
    'GetObjectRefType'
];

 function hook(RegisterNatives) {
 
    Interceptor.attach(RegisterNatives, {
        onEnter: function(args) {
            var env = args[0];
            var jclass = args[1];
            var methods = args[2];
            var methodCount = args[3].toInt32();
            
            var className = Java.vm.getEnv().getClassName(jclass);
           
            console.log("\n[RegisterNatives] Class:", className);
            console.log("Method count:", methodCount);
            
            for (var i = 0; i < methodCount; i++) {
                var methodPtr = methods.add(i * Process.pointerSize * 3);
                var namePtr = methodPtr.add(0).readPointer();
                var sigPtr = methodPtr.add(Process.pointerSize).readPointer();
                var fnPtr = methodPtr.add(Process.pointerSize * 2).readPointer();
                
                var name = namePtr.readCString();
                var signature = sigPtr.readCString();
                 var find_module = Process.findModuleByAddress(methodPtr);
                
                console.log("\nMethod", i + 1, ":");
                console.log("Name:", name);
                console.log("Signature:", signature);
                console.log("Function pointer:", fnPtr);
                console.log("module_name:", find_module.name,"module_base:", find_module.base, "module_size:", find_module.size);
                console.log("method offset:", fnPtr.sub(find_module.base).toString(16));
                // Hook this native method
                // hookNativeMethod(fnPtr, name, signature, className);
            }
        }
    });
    

}

function hookRegisterNatives() {
    let symbols = Module.enumerateSymbolsSync("libart.so");
    let addrRegisterNatives = null;

    // 遍历所有符号，查找非 CheckJNI 版本的 RegisterNatives
    for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i];

        // 确认符合 RegisterNatives 标准的符号（非 CheckJNI 版本）
        if (symbol.name.indexOf("CheckJNI") < 0 &&
            symbol.name.indexOf("RegisterNatives") >= 0) {
            addrRegisterNatives = symbol.address;
            console.log("[+] Found RegisterNatives symbol: " + symbol.name + " at " + symbol.address);
            hook(addrRegisterNatives);  // 调用 hook 函数
            break;  // 找到第一个匹配的符号即可
        }
    }
}

function hookAndroidDlopenExt() {
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function(args) {
            var libname = args[0].readCString();
            if(libname.startsWith("/data/app")) {
                console.log("Loading lib:", libname);

            }
        }
    });
}

function hookJSONObject(){
    const Exception = Java.use("java.lang.Exception");
    const JSONObject = Java.use("org.json.JSONObject");
    const String = Java.use('java.lang.String');
    const Integer = Java.use('java.lang.Integer');
    JSONObject.put.overload('java.lang.String', 'java.lang.Object').implementation = function(key, value) {
      
        if (key === "oaid_required_time") {
            console.log("[*] Detected oaid_required_time, modifying value to 0");
            value = 10;
        }
        // else if (key === "sinfo") {
        //     var j = Java.cast(value, JSONObject);
        //     console.log("[*] sinfo=" + value.getClass().getName());
        //     if(j != null){
        //         j.put(String.$new("a_root"), Integer.$new(0));
        //     }
        // }else if (key === "ev") {
        //     var j = Java.cast(value, JSONObject);
        //     console.log("[*] ev=" + value.getClass().getName());
        //     if(j != null){
        //         j.put(String.$new("ram"), String.$new("4000/2122"));
        //     }
        // }else if (key === "simulator" || value === "simulator") {
        //     return this.put("", Integer.$new(0));
        // }
        const stack = Exception.$new().getStackTrace();
        console.log("[*] JSONObject.put called with key: " + key + ", value: " + value);
        // stack.forEach((trace) => console.log(trace.toString()));
        return this.put(key, value);
    };
}

function hookLIBC() {
    // Interceptor.attach(Module.findExportByName("libc.so", "strcmp"), {
    //     onEnter: function (args) {
    //         // 打印参数（两个要比较的字符串）
    //         this.arg0 = args[0]; // const char *
    //         this.arg1 = args[1]; // const char *
    //         console.log(`strcmp("${this.arg0.readCString()}", "${this.arg1.readCString()}")`);
    //     },
    //     onLeave: function (retval) {
    //         // 修改返回值（可选）
    //         // retval.replace(0); // 强制返回 "相等"
    //         console.log(`  => 返回值: ${retval}`);
    //     }
    // });
    // Interceptor.attach(Module.findExportByName("libc.so", "strcpy"), {
    //     onEnter: function (args) {
    //         // 打印参数（两个要比较的字符串）
    //         this.arg0 = args[0]; // const char *
    //         this.arg1 = args[1]; // const char *
    //         console.log(`strcpy("${this.arg0.readCString()}", "${this.arg1.readCString()}")`);
    //     },
    //     onLeave: function (retval) {
    //         // 修改返回值（可选）
    //         // retval.replace(0); // 强制返回 "相等"
    //         console.log(`  => 返回值: ${retval}`);
    //     }
    // });
    //  Interceptor.attach(Module.findExportByName("libc.so", "strcat"), {
    //     onEnter: function (args) {
    //         // 打印参数（两个要比较的字符串）
    //         this.arg0 = args[0]; // const char *
    //         this.arg1 = args[1]; // const char *
    //         console.log(`strcat("${this.arg0.readCString()}", "${this.arg1.readCString()}")`);
    //     },
    //     onLeave: function (retval) {
    //         // 修改返回值（可选）
    //         // retval.replace(0); // 强制返回 "相等"
    //         console.log(`  => 返回值: ${retval}`);
    //     }
    // });

    // Interceptor.attach(Module.findExportByName("libc.so", "sprintf"), {
    //     onEnter: function(args) {
    //         this.buffer = args[0];
    //         this.format = args[1];
    //         // 获取格式字符串
    //         const formatStr = this.format.readCString();
    //         console.log(`sprintf(buffer=0x${this.buffer}, format="${formatStr}")`);
    //     },
    //     onLeave: function(retval) {
    //         // 查看格式化后的结果
    //         try {
    //             const result = this.buffer.readCString();
    //             console.log(`  => 结果: "${result}"`);
    //         } catch (e) {
    //             console.log("  => 无法读取结果缓冲区");
    //         }
    //     }
    // });
  
    Interceptor.attach(Module.findExportByName(null, 'fopen'), {
        onEnter: function(args) {
            // 保存参数以便在onLeave中使用
            this.filename = args[0];
            this.modes = args[1];
            
            try {
                // 读取字符串参数
                const filename = args[0].readCString();
                const modes = args[1].readCString();
                console.log(`\n[fopen] 调用:`);
                console.log(`  文件名: ${filename}`);
                console.log(`  模式: ${modes}`);
                
                // 打印调用栈
                const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
                    .map(DebugSymbol.fromAddress)
                    .join('\n');
                console.log(`调用栈:\n${stack}`);
                
            } catch(e) {
                console.error('读取参数失败:', e);
            }
        },
        
        onLeave: function(retval) {
            // 处理返回值
            if (parseInt(retval) === 0) {
                console.log('[fopen] 返回: NULL (打开失败)');
            } else {
                console.log(`[fopen] 返回: 0x${retval} (文件句柄)`);
                
                // 可以记录文件句柄和文件名的映射
                const filename = this.filename.readCString();ß
            }
        }
    });


}

function hookInputMethod() {
    const Exception = Java.use("java.lang.Exception");
    const InputMethodInfo = Java.use('android.view.inputmethod.InputMethodInfo');
    const String = Java.use('java.lang.String');
 
    InputMethodInfo.getId.implementation = function() {
         console.log("getId called" + this.getId());
        return String.$new("com.sohu.inputmethod.sogou.xiaomi/.SogouIME");
    }
    InputMethodInfo.getPackageName.implementation = function() {
        console.log("getPackageName called" + this.getPackageName());
        return String.$new("com.sohu.inputmethod.sogou.xiaomi");
    }

    var InputMethodManager = Java.use('android.view.inputmethod.InputMethodManager');
    InputMethodManager.getInputMethodList.implementation = function() {
        console.log("\n=== Hooked getInputMethodList调用 ===");
        var result = this.getInputMethodList();
        for (var i = 0; i < result.size(); i++) {
            var inputMethodInfo = Java.cast(result.get(i), InputMethodInfo);
            console.log("Input Method Service: " + inputMethodInfo.getServiceName());
            console.log("Package Name: " + inputMethodInfo.getPackageName());
            console.log("id : " + inputMethodInfo.getId());
            console.log("----------------------------------");
        }
        const stack = Exception.$new().getStackTrace();
        stack.forEach((trace) => console.log(trace.toString()));
        return result;
    };
}

function hookOAID(){
    const Thread = Java.use('java.lang.Thread');
    const IdProviderImpl = Java.use('com.android.id.impl.IdProviderImpl');
    IdProviderImpl.getOAID.implementation = function(context) {
        console.log("getOAID called=" + this.getOAID(context));
        Thread.sleep(1000); // 模拟延时
        return this.getOAID(context);
    }
    IdProviderImpl.getVAID.implementation = function(context) {
        console.log("getVAID called=" + this.getVAID(context));
        Thread.sleep(1000); // 模拟延时
        return "617895934259ab6d";
    }
    IdProviderImpl.getAAID.implementation = function(context) {
        console.log("getAAID called=" + this.getAAID(context));
        Thread.sleep(1000); // 模拟延时
        return "59f51e90-0000-4a55-1111-b3a62a8d4620";
    }
}

function hookJNIEnv(){
    let jnienv_addr = Java.vm.getEnv().handle.readPointer();
    // hookAll(jnienv_addr);
    hookJNIMethod("NewStringUTF");
    hookJNIMethod("GetStringUTFChars");
}

function hookJNIMethod(method_name) {
    let jnienv_addr = Java.vm.getEnv().handle.readPointer();
    let offsets = JNINativeInterface.indexOf(method_name) * Process.pointerSize;
    let func_addr = Memory.readPointer(jnienv_addr.add(offsets));
    Interceptor.attach(func_addr, {
        onEnter: function(args) {
            console.log(`\n[JNIEnv] 调用: ${method_name}`);
            if(method_name === "NewStringUTF") {
                console.log(`参数: ${args[1].readCString()}`); // 假设第一个参数是字符串
            }
            const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress)
            console.log(`调用栈:\n${stack}`);
        },
        onLeave: function(retval) {
            if(method_name === "GetStringUTFChars") {
                console.log(`[JNIEnv] GetStringUTFChars 返回: ${retval.readCString()}\n`); // 假设返回值是字符串
            }
        }
    });
}

function hookUMeng() {
    // Specify the target class
    var targetClass = "com.umeng.commonsdk.internal.utils.h";
    
    // Enumerate all methods in the class
    var hook = Java.use(targetClass);
    
    // Get all methods of the class
    var methods = hook.class.getDeclaredMethods();
    
    // Hook each method
    methods.forEach(function(method) {
        var methodName = method.getName();
        var overloads = hook[methodName].overloads;
        
        overloads.forEach(function(overload) {
            // Get the parameter types for logging
            var paramTypes = overload.argumentTypes.map(function(arg) {
                return arg.className;
            }).join(", ");
            
            overload.implementation = function() {
                // Log method call with arguments
                console.log("\n[+] Called: " + targetClass + "." + methodName + "(" + paramTypes + ")");
                
                // Print arguments if any
                if (arguments.length > 0) {
                    console.log("    Arguments:");
                    for (var i = 0; i < arguments.length; i++) {
                        console.log("        [" + i + "] " + arguments[i]);
                    }
                } else {
                    console.log("    No arguments");
                }
                
                // Print stack trace to see where it's called from
                console.log("    Stack trace:");
                console.log(Java.use("android.util.Log").getStackTraceString(
                    Java.use("java.lang.Throwable").$new()
                ));
                
                // Call the original method
                var result = this[methodName].apply(this, arguments);
                
                // Log the return value
                var returnType = overload.returnType.name;
                console.log("    Return Type: " + returnType);
                console.log("    Return Value: " + result);
                
                return result;
            };
        });
    });
    
    console.log("[*] Successfully hooked all methods in " + targetClass);
}

Java.perform(() => {
    // hookJSONObject();
    // hookInputMethod();
    // hookOAID();
    // hookLIBC();
    // hookJNIEnv();
    hookUMeng();
});