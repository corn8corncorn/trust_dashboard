@echo off
title Vite + Cloudflare Tunnel Demo Starter

echo ============================================
echo  啟動本地前端開發伺服器 (npm run dev)
echo ============================================

start cmd /k "npm run dev"

echo 等待 Vite 啟動中...
echo (若 vite 已啟動，可直接按 Enter 繼續)
pause >nul

echo ============================================
echo  啟動 Cloudflare Tunnel
echo ============================================
cloudflared tunnel --url http://localhost:5173
pause
