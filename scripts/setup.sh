#!/bin/bash

# SAAS Automation Builder - Automatic Setup Script
# This script sets up everything for you automatically

set -e

echo "==========================================";
echo "🚀 SAAS Automation Builder - Auto Setup"
echo "==========================================";
echo ""

# Step 1: Check Node.js
echo "✓ Checking Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install from: https://nodejs.org/"
    exit 1
fi
echo "✓ Node.js $(node --version) found"
echo ""

# Step 2: Install dependencies
echo "📦 Installing dependencies... (this may take a few minutes)"
npm install
echo "✓ Dependencies installed"
echo ""

# Step 3: Setup environment
echo "🔐 Setting up environment variables..."
if [ ! -f .env.local ]; then
    cp .env.local.example .env.local
    echo "✓ Created .env.local"
    echo ""
    echo "📝 IMPORTANT: Edit .env.local with your API keys:"
    echo "   - Clerk: https://go.clerk.com/qbebvpA"
    echo "   - Neon Database: https://neon.tech/"
    echo "   - Stripe: https://stripe.com"
    echo "   - Google: https://console.cloud.google.com"
    echo ""
else
    echo "✓ .env.local already exists"
fi
echo ""

# Step 4: Generate Prisma
echo "🗄️ Setting up database client..."
npm run prisma:generate
echo "✓ Prisma client generated"
echo ""

# Step 5: Ready to run
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your API keys"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:3000"
echo ""
echo "Or use Docker:"
echo "  docker-compose up"
echo ""
