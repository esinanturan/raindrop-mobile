package io.raindrop.raindropio.extension

import android.content.ContentResolver
import android.content.Context
import android.database.Cursor
import android.net.Uri
import android.provider.OpenableColumns
import android.util.Patterns
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import java.util.Locale

object Utils {
    @JvmStatic
    fun extractUrl(subject: String, text: String): WritableMap {
        val result = Arguments.createMap()
        val words = text.split("\\s+".toRegex())
        val pattern = Patterns.WEB_URL

        // a word with an explicit scheme always wins over a scheme-less domain-like word,
        // otherwise "hosts.txt" in a title beats the real link that comes after it
        val link = words.firstOrNull { word ->
            pattern.matcher(word).find() &&
            (
                word.lowercase(Locale.ROOT).contains("http://") ||
                word.lowercase(Locale.ROOT).contains("https://")
            )
        }
            ?: words.firstOrNull { pattern.matcher(it).matches() }?.let { "http://$it" }

        if (link != null) {
            result.putString("link", link)
            result.putString("title", subject)
        }

        return result
    }

    @JvmStatic
    fun getFileFromUri(uri: Uri, context: Context): WritableMap {
        val cr: ContentResolver = context.contentResolver
        val returnCursor: Cursor? = cr.query(uri, null, null, null, null)
        val nameIndex = returnCursor?.getColumnIndex(OpenableColumns.DISPLAY_NAME)
        returnCursor?.moveToFirst()

        val file = Arguments.createMap()
        file.putString("uri", uri.toString())
        file.putString("type", cr.getType(uri))
        file.putString("name", nameIndex?.let { returnCursor.getString(it) })

        val result = Arguments.createMap()
        result.putMap("file", file)

        returnCursor?.close()

        return result
    }
}