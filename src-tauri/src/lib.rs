// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}


#[tauri::command]
async fn fetch_ipfs(cid: String) -> Result<String, String> {
    let url = format!("https://ipfs.io/ipfs/{}", cid);
    let response = reqwest::get(&url).await.map_err(|e| e.to_string())?;
    let content = response.text().await.map_err(|e| e.to_string())?;
    Ok(content)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, fetch_ipfs])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
