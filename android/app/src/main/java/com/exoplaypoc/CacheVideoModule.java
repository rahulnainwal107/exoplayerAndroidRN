package com.exoplaypoc;

import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.exoplayer2.ExoPlayer;
import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.RenderersFactory;

import org.checkerframework.checker.nullness.qual.Nullable;

import java.util.Map;
import java.util.HashMap;

public class CacheVideoModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "CacheVideoModule";
    private final Context context;
    private FragmentManager fragmentManager;
    private MenuItem preferExtensionDecodersMenuItem;

    CacheVideoModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @NonNull
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void createCacheVideoModule(String name, String location) {
        Log.d("CacheVideoModule", "Create event called with name: " + name
                + " and location: " + location);
    }

   @ReactMethod
   public void downloadVideoUsingUri(String  videoUri){
       //ExoPlayer player = new ExoPlayer.Builder(context).build();
       Log.d("Video Uri ", "" + videoUri);
       onSampleDownloadButtonClicked(videoUri);
   }

    private void onSampleDownloadButtonClicked(String videoUri) {
//        int downloadUnsupportedStringId = getDownloadUnsupportedStringId(playlistHolder);
//        if (downloadUnsupportedStringId != 0) {
//            Toast.makeText(context, downloadUnsupportedStringId, Toast.LENGTH_LONG)
//                    .show();
//        } else if (!notificationPermissionToastShown
//                && Util.SDK_INT >= 33
//                && checkSelfPermission(Api33.getPostNotificationPermissionString())
//                != PackageManager.PERMISSION_GRANTED) {
//            downloadMediaItemWaitingForNotificationPermission = MediaItem.fromUri(playlistHolder.getUri());
//            requestPermissions(
//                    new String[] {Api33.getPostNotificationPermissionString()},
//                    /* requestCode= */ POST_NOTIFICATION_PERMISSION_REQUEST_CODE);
//        } else {
//            toggleDownload(MediaItem.fromUri(playlistHolder.getUri()),context);
//        }
        toggleDownload(MediaItem.fromUri(videoUri));
        Log.d("Button Press222 ",""+videoUri);
    }

    private void toggleDownload(MediaItem mediaItem) {
        Log.d("Button toggleDownload ","");
        RenderersFactory renderersFactory =
                DemoUtil.buildRenderersFactory(
                        /* context= */ context, isNonNullAndChecked(preferExtensionDecodersMenuItem));
        DownloadTracker downloadTracker = DemoUtil.getDownloadTracker(/* context= */ context);
        Activity activity = getCurrentActivity();
        if (activity instanceof FragmentActivity) {
            FragmentManager fragmentManager = ((FragmentActivity) activity).getSupportFragmentManager();
            // Use the fragmentManager here...
            Log.d("Button fragmentManager ",""+fragmentManager);
            downloadTracker.toggleDownload(fragmentManager, mediaItem, renderersFactory);
        }
    }

     private static boolean isNonNullAndChecked(@Nullable MenuItem menuItem) {
        // Temporary workaround for layouts that do not inflate the options menu.
        return menuItem != null && menuItem.isChecked();
    }
}