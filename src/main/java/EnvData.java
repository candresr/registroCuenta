

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.google.gson.Gson;


/**
 * Servlet implementation class EnvData
 * @param <PostData>
 * @param <Article>
 */


public class EnvData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EnvData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
  
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append(request.getParameter("contactos"));
		response.setContentType("application/json");
		//PrintWriter out = response.getWriter();
		String dataJson = request.getParameter("contactos").toString();
		ArrayList<String> escrito = new ArrayList<String>();
		String ruta = "/home/nomada/workspace/registroCuenta/download/archivo.txt";
	    File archivo = new File(ruta);
	    BufferedWriter bw;
	    String linea = null;
	    if(archivo.exists()) {
	    	Scanner s = new Scanner(archivo);
	    	while (s.hasNextLine()) {
				linea = s.nextLine(); 	
			}
	    	escrito.add(linea);
	        bw = new BufferedWriter(new FileWriter(archivo));
	        bw.write(dataJson + "\n"); 
	        for (String anterior : escrito) {
				bw.write(anterior + "\n");
			}
	        bw.close();
	    } else {
	    	bw = new BufferedWriter(new FileWriter(archivo));
	        bw.write(dataJson);
	        bw.close();
	    }
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		
		String path = "/home/nomada/workspace/registroCuenta/download/archivo.txt";

		response.setContentType("application/octet-stream");
		response.setHeader("Content-Disposition","attachment;filename=archivo.txt");
		
		File file = new File(path);
		FileInputStream fileIn = new FileInputStream(file);
		ServletOutputStream out = response.getOutputStream();

		byte[] outputByte = new byte[4096];
		
		while(fileIn.read(outputByte, 0, 4096) != -1)
		{
			out.write(outputByte, 0, 4096);
		}
		fileIn.close();
		out.flush();
		out.close();
	}


}
