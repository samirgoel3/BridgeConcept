package com.apporiotaxidriver;

import android.annotation.SuppressLint;
import android.app.KeyguardManager;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.PowerManager;
import android.util.Log;

import com.onesignal.NotificationExtenderService;
import com.onesignal.OSNotificationReceivedResult;

public class OneSignalServiceClass extends NotificationExtenderService {

    private String TAG  = "OneSignalServiceClass";


    @Override
    protected boolean onNotificationProcessing(OSNotificationReceivedResult notification) {
        Log.d(TAG,""+notification.payload.body);
        openReceivePassengerScreen();
        return false;
    }



    @SuppressLint("MissingPermission")
    private void openReceivePassengerScreen() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            Log.d(""+TAG,"Upper logic");
            Intent broadcastIntent = new Intent();
            broadcastIntent.setAction(""+ BuildConfig.APPLICATION_ID);
            sendBroadcast(broadcastIntent);
        } else {
            Log.d(""+TAG,"Bottom logic");
            PowerManager pm = (PowerManager) OneSignalServiceClass.this.getSystemService(Context.POWER_SERVICE);
            PowerManager.WakeLock wl = pm.newWakeLock(PowerManager.FULL_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP, ""+TAG);
            wl.acquire(30 * 1000);
            KeyguardManager keyguardManager = (KeyguardManager) OneSignalServiceClass.this.getSystemService(OneSignalServiceClass.this.KEYGUARD_SERVICE);
            KeyguardManager.KeyguardLock lock = keyguardManager.newKeyguardLock(Context.KEYGUARD_SERVICE);
            lock.disableKeyguard();
            OneSignalServiceClass.this.startActivity(new Intent(OneSignalServiceClass.this, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP));
        }
    }

}
