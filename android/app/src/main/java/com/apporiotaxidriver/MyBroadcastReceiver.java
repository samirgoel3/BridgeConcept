package com.apporiotaxidriver;

import android.annotation.SuppressLint;
import android.app.KeyguardManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.PowerManager;
import android.util.Log;

public class MyBroadcastReceiver extends BroadcastReceiver {

    private static final String TAG = "MyBroadcastReceiver";
    PowerManager pm;

    @SuppressLint("NewApi")
    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d(""+TAG,"Received in Braodcast receiver ");
        pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
        callActivities(context, intent);
    }

    @SuppressLint("LongLogTag")
    private void callActivities(Context context, Intent intent) {
        Log.d(""+TAG,"Calling activities from Braodcast receiver ");
        PowerManager pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
        PowerManager.WakeLock wl = pm.newWakeLock(PowerManager.FULL_WAKE_LOCK | PowerManager.ACQUIRE_CAUSES_WAKEUP, ""+TAG);
        wl.acquire(30 * 1000);
        KeyguardManager keyguardManager = (KeyguardManager) context.getSystemService(context.KEYGUARD_SERVICE);
        KeyguardManager.KeyguardLock lock = keyguardManager.newKeyguardLock(Context.KEYGUARD_SERVICE);
        lock.disableKeyguard();
        Intent i = new Intent();
        i.setClassName(""+ BuildConfig.APPLICATION_ID, ""+BuildConfig.APPLICATION_ID+".MainActivity");
        i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(i);
    }


}

