import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

public class PostData{
	public static void main(String[] args) {
	
		try {
			
			URL url = new URL("http://localhost:8080/registroCuenta/download/archivo.txt");

			URLConnection urlCon = url.openConnection();

			System.out.println(urlCon.getContentType());

			InputStream is = urlCon.getInputStream();
			FileOutputStream fos = new FileOutputStream("e:/foto.jpg");

			byte[] array = new byte[1000];
			int leido = is.read(array);
			while (leido > 0) {
				fos.write(array, 0, leido);
				leido = is.read(array);
			}

			is.close();
			fos.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}