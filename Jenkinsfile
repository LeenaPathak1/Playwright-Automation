pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                    } else {
                        bat 'npm ci'
                    }
                }
            }
        }

        stage('Run tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npx playwright install --with-deps || true'
                        sh 'npx playwright test --reporter=html'
                    } else {
                        bat 'npx playwright install || exit 0'
                        bat 'npx playwright test --reporter=html'
                    }
                }
            }
            post {
                always {
                    archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
                }
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report',
                    allowMissing: false,
                    keepAll: true,
                    alwaysLinkToLastBuild: true
                ])
            }
        }
    }

    post {
        always {
            junit testResults: 'test-results/**/*.xml', allowEmptyResults: true
        }
    }
}
