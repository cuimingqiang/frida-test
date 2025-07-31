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
        // const stack = Exception.$new().getStackTrace();
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
            // const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
            //     .map(DebugSymbol.fromAddress)
            // console.log(`调用栈:\n${stack}`);
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

function hookLibCore(){
    let CharsetUtils = Java.use("libcore.util.CharsetUtils");
    const Exception = Java.use("java.lang.Exception");
    CharsetUtils.toUtf8Bytes.overload('java.lang.String', 'int', 'int').implementation = function(s, offset, length) {
        console.log("[*] CharsetUtils.toUtf8Bytes called with name: " + s);
        const stack = Exception.$new().getStackTrace();
        stack.forEach((trace) => console.log(trace.toString()));
        return this.toUtf8Bytes(s, offset, length);
    }
}

function hookUnity() {
    const libunity = Process.findModuleByName("libunity.so");
    if (!libunity) {
        console.log("[!] libunity.so not found, exiting hookUnity");
        return;
    }
    console.log("[*] libunity.so found at base address: " + libunity.base);
    // let sub_7AFF4 = libunity.base.add(0x7AFF4 + 1);
    // Interceptor.attach(sub_7AFF4, {
    //     onEnter: function(args) {
    //         console.log(`sub_7AFF4 arg0 at ${args[0]}: ${args[0].readCString()}`);
    //         // const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //         //     .map(DebugSymbol.fromAddress)
    //         // console.log(`调用栈:\n${stack}`);
    //     },
    //     onLeave: function(retval) {
            
    //     }
    // });
    // let sub_100E96C = libunity.base.add(0x100E96C + 1);
    // console.log(`sub_100E96C: ${sub_100E96C}`);
    // if (sub_100E96C) {
    //     Interceptor.attach(sub_100E96C, {
    //         onEnter: function(args) {
    //             const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //                 .map(DebugSymbol.fromAddress)
    //             console.log(`sub_100E96C调用栈:\n${stack}`);
    //         },
    //         onLeave: function(retval) {
    //             // retval.replace(0); // 如果需要修改返回值，可以取消注释
    //         }
    //     });
    // }
    // let sub_100E968 = libunity.base.add(0x100E968 + 1);
    // console.log(`sub_100E968: ${sub_100E968}`);
    // if (sub_100E968) {
    //     Interceptor.attach(sub_100E968, {
    //         onEnter: function(args) {
    //             const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //                 .map(DebugSymbol.fromAddress)
    //             console.log(`sub_100E968调用栈:\n${stack}`);
    //         },
    //         onLeave: function(retval) {
    //             // retval.replace(0); // 如果需要修改返回值，可以取消注释
    //         }
    //     });
    // } 
    // let sub_173710 = libunity.base.add(0x173710 + 1);
    // console.log(`sub_173710: ${sub_173710}`);
    // if (sub_173710) {
    //     Interceptor.attach(sub_173710, {
    //         onEnter: function(args) {
    //             const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //                 .map(DebugSymbol.fromAddress)
    //             console.log(`sub_173710调用栈:\n${stack}`);
    //             let i = args[0].toUInt32();
    //             console.log(`sub_173710 args0: ${i} ${ptr(i)}`);
    //             console.log(`sub_173710 args1: ${args[1].readPointer().readCString()}`);
    //             console.log(`sub_173710 args2: ${args[2].toInt32()}`);
    //             console.log(`sub_173710 args3: ${args[3].toInt32()}`);
    //         },
    //         onLeave: function(retval) {
    //             // retval.replace(0); // 如果需要修改返回值，可以取消注释
    //         }
    //     });
    // }
    let sub_7B04E = libunity.base.add(0x7B04E + 1);
    console.log(`sub_7B04E: ${sub_7B04E}`);
    if (sub_7B04E) {
        Interceptor.attach(sub_7B04E, {
            onEnter: function(args) {
                let v = args[1].readCString();
                if(v != null && v.includes("异常")) {
                    const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
                        .map(DebugSymbol.fromAddress)
                    console.log(`sub_7B04E调用栈:\n${stack}`);
                    console.log(`sub_7B04E at ${args[1]}: args1: ${args[0].readCString()}`);
                    console.log(`sub_7B04E at ${args[2]}: args2: ${args[1].readCString()}`);
                    console.log(`sub_7B04E at ${args[3]}: args3: ${args[2].toInt32()}`);
                }
            },
            onLeave: function(retval) {
                // retval.replace(0); // 如果需要修改返回值，可以取消注释
            }
        });
    }
    // let sub_7B014 = libunity.base.add(0x7B014 + 1);
    // console.log(`sub_7B014: ${sub_7B014}`);
    // if (sub_7B014) {
    //     Interceptor.attach(sub_7B014, {
    //         onEnter: function(args) {
    //             // console.log(`\n sub_7B014 args1: ${hexdump(args[0],{length:16})}`);
    //             let str = args[1].readPointer().readCString();
    //             if (str !== null && str.includes("当前设备异常")) {
    //                 console.log(`\nsub_7B014 ${args[1].readPointer()} = args2: ${str}`);
    //                 const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //                 .map(DebugSymbol.fromAddress)
    //                 console.log(`sub_7B014调用栈:\n${stack}`);
    //             }
    //         },
    //         onLeave: function(retval) {
    //             // retval.replace(0); // 如果需要修改返回值，可以取消注释
    //         }
    //     });
    // }
    let sub_199698 = libunity.base.add(0x199698 + 1);
    console.log(`sub_199698: ${sub_199698}`);
    if (sub_199698) {
        Interceptor.attach(sub_199698, {
            onEnter: function(args) {
                console.log(`\n sub_199698 args: ${hexdump(args[0],{length:64})}`);
                let args0 = args[0].add(32).readPointer();
                console.log(`sub_199698 args0 + 32: ${args0} = ${hexdump(args0,{length:64})}`);
                let simulator = args0.add(28).readCString(4);
                console.log(`sub_199698 args0 + 12: ${args0.add(28)} = ${simulator}`);
                if (simulator === "S_MR") {
                    const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
                        .map(DebugSymbol.fromAddress)
                    console.log(`sub_199698调用栈:\n${stack}`);
                }
            },
            onLeave: function(retval) {
                // retval.replace(0); // 如果需要修改返回值，可以取消注释
            }
        });
    }
    // let sub_3E6970 = libunity.base.add(0x3E6970 + 1);
    // console.log(`sub_3E6970: ${sub_3E6970}`);
    // if (sub_3E6970) {
    //     Interceptor.attach(sub_3E6970, {
    //         onEnter: function(args) {
    //             this.copy0 = args[0];
    //             console.log(`sub_3E6970 args0: ${args[0].readPointer().readCString()} at ${args[0]} `);
    //             console.log(`sub_3E6970 args1: ${args[1].readPointer().readCString()}`);
    //             const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //                 .map(DebugSymbol.fromAddress)
    //             console.log(`sub_3E6970调用栈:\n${stack}`);
    //         },
    //         onLeave: function(retval) {
    //             // retval.replace(0); // 如果需要修改返回值，可以取消注释
    //             console.log(`sub_3E6970 ${this.copy0.readPointer()} = retval args0: ${this.copy0.readPointer().readCString()}`);
    //         }
    //     });
    // }

    // let sub_3ECCD0 = libunity.base.add(0x3ECCD0 + 1);
    // console.log(`sub_3ECCD0: ${sub_3ECCD0}`);
    // if (sub_3ECCD0) {
    //     Interceptor.attach(sub_3ECCD0, {
    //         onEnter: function(args) {
    //             this.copy0 = args[0];
    //             this.copy1 = args[1];
    //             let p0 = args[0].readPointer();
    //             const range = Process.findRangeByAddress(p0);
    //             if (range) {
    //                 console.log(`sub_3ECCD0 args0 at ${args[0]}: ${p0.readCString()}`);
    //             }
    //             console.log(`sub_3ECCD0 args1 at ${args[1]}: ${hexdump(args[1], {length: 64})}`);
    //             const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //                 .map(DebugSymbol.fromAddress)
    //             console.log(`sub_3ECCD0 调用栈:\n${stack}`);
    //         },
    //         onLeave: function(retval) {
    //             // retval.replace(0); // 如果需要修改返回值，可以取消注释
    //             console.log(`sub_3ECCD0 retval args0 at ${this.copy0.readPointer()} : ${this.copy0.readPointer().readCString()}`);
    //             console.log(`sub_3ECCD0 retval args1 at ${this.copy1} : ${hexdump(this.copy1, {length: 64})}`);
    //         }
    //     });
    // }
    // let sub_3906FC = libunity.base.add(0x3906FC + 1);
    // console.log(`sub_3906FC: ${sub_3906FC}`);
    // if (sub_3906FC) {
    //     Interceptor.attach(sub_3906FC, {
    //         onEnter: function(args) {
    //             this.copy0 = args[0];
    //             this.copy1 = args[1];
    //             this.copy2 = args[2].toInt32();
    //             console.log(`sub_3906FC args0 at ${args[0]}: ${args[0].readCString()}`);
    //             console.log(`sub_3906FC args1 at ${args[1]}: ${hexdump(args[1], {length: 16})}`);
    //             console.log(`sub_3906FC args2 at ${args[2]}: ${args[2].toInt32()}`);
    //             const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //                 .map(DebugSymbol.fromAddress)
    //             console.log(`sub_3906FC 调用栈:\n${stack}`);
    //         },
    //         onLeave: function(retval) {
    //             // retval.replace(0); // 如果需要修改返回值，可以取消注释
    //             console.log(`sub_3906FC retval : ${retval.toInt32()}`);
    //             console.log(`sub_3906FC retval args0 at ${this.copy0} : ${hexdump(this.copy0, {length: this.copy2})}`);
    //         }
    //     });
    // }
    // let off_FF1AFC = libunity.base.add(0xFF1AFC + 1);
    // console.log(`off_FF1AFC: ${off_FF1AFC}`);
    // if (off_FF1AFC) {
    //     Interceptor.attach(off_FF1AFC, {
    //         onEnter: function(args) {
    //             this.copy0 = args[0];
    //             this.copy1 = args[1];
    //             console.log(`off_FF1AFC args0 at ${args[0]}: ${args[0].readCString()}`);
    //             const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
    //                 .map(DebugSymbol.fromAddress)
    //             console.log(`off_FF1AFC 调用栈:\n${stack}`);
    //         },
    //         onLeave: function(retval) {
    //             // retval.replace(0); // 如果需要修改返回值，可以取消注释
    //             console.log(`off_FF1AFC retval : ${retval.readCString()}`);
    //         }
    //     });
    // }
}


function hookSLua() {
    const libslua = Process.findModuleByName("libslua.so");
    if (!libslua) {
        console.log("[!] libslua.so not found, exiting hookSLua");
        return;
    }
    console.log("[*] libslua.so found at base address: " + libslua.base);
    
    const lua_call = Module.findExportByName("libslua.so", "lua_call");
    if (lua_call) {
        Interceptor.attach(lua_call, {
            onEnter: function (args) {
                const L = args[0];
                const nargs = args[1].toInt32();
                const nresults = args[2].toInt32();
                const idx = -nargs - 1;
                // 检查是否调用了目标函数
                const lua_typename = Module.findExportByName("libslua.so", "lua_typename");
                const lua_type = Module.findExportByName("libslua.so", "lua_type");
                const type = new NativeFunction(lua_type, "int", ["pointer", "int"])(L, -3);
                const funcName = new NativeFunction(lua_typename, "pointer", ["pointer", "int"])(L, type).readCString();
                console.log(`\n[lua_call] Called function: ${funcName}, nargs: ${nargs}, nresults: ${nresults}`);
                if (funcName.includes("RequestCharactersInTexture")) {
                    console.log("Lua called RequestCharactersInTexture!");
                }
            }
        });
    } else {
        console.log("[!] lua_call not found in liblua.so");
    }
    obj
}

function hookSYZ(){
    let libcheckrisknative = Process.findModuleByName("libcheckrisknative.so");
    if (!libcheckrisknative) {
        console.log("[!] libcheckrisknative.so not found, exiting hookSYZ");
        return;
    }
    console.log("[*] libcheckrisknative.so found at base address: " + libcheckrisknative.base);
    let sub_2FE5C = libcheckrisknative.base.add(0x2FE5C );
    console.log(`sub_2FE5C: ${sub_2FE5C}`);
    if (sub_2FE5C) {
        Interceptor.attach(sub_2FE5C, {
            onEnter: function(args) {
                console.log(`\n sub_2FE5C args0: ${args[0].readCString()}`);
                const stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
                    .map(DebugSymbol.fromAddress)
                console.log(`sub_2FE5C调用栈:\n${stack}`);
            },
            onLeave: function(retval) {
                // retval.replace(0); // 如果需要修改返回值，可以取消注释
                console.log(`sub_2FE5C retval: ${retval.readCString()}`);
            }
        });
    }
    let sub_2E11C = libcheckrisknative.base.add(0x2E11C );
    console.log(`sub_2E11C: ${sub_2E11C}`);
    if (sub_2E11C) {
        Interceptor.attach(sub_2E11C, {
            onEnter: function(args) {
                console.log(`\n sub_2E11C args0 at ${args[0]}: ${hexdump(args[0], {length: 64})}`);
                console.log(`\n sub_2E11C args1 at ${args[1]}: ${hexdump(args[1], {length: 64})}`);
               
            },
            onLeave: function(retval) {
                // retval.replace(0); // 如果需要修改返回值，可以取消注释
                console.log(`sub_2E11C retval at ${retval}: ${hexdump(retval, {length: 64})}`);
            }
        });
    }
}

function hookAndroidDlopenExt(){
    const android_dlopen_ext = Module.findExportByName("libc.so", "android_dlopen_ext");
    if (android_dlopen_ext) {
        Interceptor.attach(android_dlopen_ext, {
            onEnter: function(args) {
                this.libname = args[0].readCString();
                // console.log(`\n[+] android_dlopen_ext called with libname: ${libname}`);
                // if (libname && libname.includes("libunity.so")) {
                //     console.log(`[+] 检测到 libunity.so 加载请求`);
                //     // 启动监控
                //     hookUnity();
                // }
               
            },
            onLeave: function(retval) {
                if (retval.isNull()) {
                    // console.log(`[!] android_dlopen_ext failed to load: ${this.libname}`);
                } else {
                    // console.log(`[+] android_dlopen_ext successfully loaded: ${this.libname} at ${retval}`);
                    if (this.libname && this.libname.includes("libcheckrisknative.so")) {
                        console.log(`[+] 检测到 libunity.so 加载请求`);
                        // 启动监控
                        hookSYZ();
                    }
                    // if (this.libname && this.libname.includes("libslua.so")) {
                    //     console.log(`[+] 检测到 liblua.so 加载请求`);
                    //     // 启动监控
                    //     hookSLua();
                    // }
                }
            }
        });
    }
    Interceptor.attach(Module.findExportByName("libdl.so", "dlopen"), {
        onEnter: function(args) {
            this.libname = args[0].readCString();
            this.flags = args[1].toInt32();
            // console.log(`dlopen called: ${this.libname}, flags: 0x${this.flags.toString(16)}`);
        },
        onLeave: function(retval) {
            if (retval.isNull()) {
                // console.log(`dlopen failed to load: ${this.libname}`);
            } else {
                // console.log(`dlopen successfully loaded: ${this.libname} at ${retval}`);
                if (this.libname && this.libname.includes("libcheckrisknative.so")) {
                    console.log(`[+] 检测到 libunity.so 加载请求`);
                    // 启动监控
                    hookSYZ();
                }
                // if (this.libname && this.libname.includes("libslua.so")) {
                //     console.log(`[+] dlopen 检测到 libslua.so 加载请求`);
                //     // 启动监控
                //     // hookUnity();
                //     hookSLua();
                // }
            }
        }
    }); 
    // hookUnity();
}

function hookMap(){
    let HashMap = Java.use("java.util.HashMap");
    HashMap.put.overload('java.lang.Object', 'java.lang.Object').implementation = function(key, value) {
        console.log("[*] HashMap.put called with key: " + key + ", value: " + value);
        // 可以在这里添加对特定键值对的处理逻辑
        return this.put(key, value);
    };
}

Java.perform(() => {
    // hookJSONObject();
    // hookInputMethod();
    // hookOAID();
    // hookLIBC();
    // hookJNIEnv();
    // hookUMeng();
    // hookLibCore();
    hookAndroidDlopenExt();
    // hookMap();
});